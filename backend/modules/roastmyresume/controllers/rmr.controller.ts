import express from "express";
import debug from "debug";
import RmrService from "../service/rmr.service";
import fileUpload from "express-fileupload";

const log: debug.IDebugger = debug("app:rmr-controller");

class RmRController {
  constructor() {}

  async roastResume(req: express.Request, res: express.Response) {
    try {

      if (!req.files || !req.files.resume) {
        return res.status(400).json({ error: "No docx file uploaded." });
      }

      let resumePath = await RmrService.saveResumeToS3(req.files.resume as fileUpload.UploadedFile);
      console.info(`[RMR]::[S3-Upload-Success]::${resumePath}`);

      let createRmrUserRes;

      if (resumePath != null) {
        createRmrUserRes = await RmrService.createRmrUser({
          resumePath,
          email: '',
          newsletterSubsribed: false
        });
        console.info("[RMR]::[User-Create-Success]");
      }

      return res.status(200).json({ 
        summary: await RmrService.getFeedback(req.files.resume as fileUpload.UploadedFile), 
        ...(createRmrUserRes && { id: createRmrUserRes.id })
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new RmRController();
