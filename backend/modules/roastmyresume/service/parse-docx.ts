import mammoth from "mammoth";
import fileUpload from "express-fileupload";

class ParseDocx {
  async getContent(resume: fileUpload.UploadedFile) {
    try {
      const docxFile = resume as fileUpload.UploadedFile;
      const buffer = docxFile.data;
      let docxContent = await mammoth.extractRawText({ buffer });
      return docxContent;
    } catch (err) {
      console.error(
        `[${new Date()}]::[Error]::[Docx-Parser]::Error in extracting docx contents`,
        err
      );
    }
  }
}

export default new ParseDocx();
