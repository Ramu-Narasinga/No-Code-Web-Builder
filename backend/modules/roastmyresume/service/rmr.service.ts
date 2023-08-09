import axios from "axios";
import { SummarizerManager } from "node-summarizer";
import ParseDocx from "./parse-docx";
import fileUpload from "express-fileupload";
import { CreateUserDto } from "../dto/create.user.dto";
import s3HelperService from "../../common/services/s3.helper.service";
import RmrDao from "../daos/rmr.dao";

const apiKey = process.env.apiKey;
const apiUrl = process.env.apiUrl ?? "";

class RmrService {

  constructor() { }

  private async getSummary(userPrompt: String, systemPrompt: String) {
    try {
      const response = await axios.post(
        apiUrl,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const summary = response.data.choices[0].message["content"];
      return summary;
    } catch (error) {
      console.error("[Error]::[Get-Summary-Fn]::[ChatGPT-API]", error);
      return null;
    }
  }

  private summarize(content: String) {
    try {
      let Summarizer = new SummarizerManager(
        content,
        process.env.numberOfSentences
      );
      let summary = Summarizer.getSummaryByFrequency().summary;
      return summary;
    } catch (err) {
      console.error("[Error]::[Summarize]::Error in summarising the content", err);
    }
  }

  async getFeedback(resume: fileUpload.UploadedFile) {
    let docxExtraction = await ParseDocx.getContent(resume);
    const docxText = docxExtraction?.value ?? "";
    const userPrompt = this.summarize(docxText);
    console.log(`[RMR]::[userPrompt]::${userPrompt}`);
    const systemPrompt = process.env.systemPrompt ?? "";
    console.log(`[RMR]::[systemPrompt]::${systemPrompt}`);
    let summary = await this.getSummary(userPrompt, systemPrompt);
    console.log(`[RMR]::[summary]::${summary}`);
    return summary;
  }

  async saveResumeToS3(resume: fileUpload.UploadedFile) {
    try {
      return await s3HelperService.upload(`${process.env.S3_FOLDER_ROASTMYRESUME}${Date.now()}`, resume.data);
    } catch(err) {
      console.error(`[Error]::[Save-Resume-To-S3]:: ${err}`);
    }
  }

  async createRmrUser(resource: CreateUserDto) {
    try {
      return await RmrDao.createUser(resource);
    } catch(err) {
      console.log("Error in visitor activity service", err);
      throw new Error("Create Feedback Activity Error")
    }
  }
}

export default new RmrService();