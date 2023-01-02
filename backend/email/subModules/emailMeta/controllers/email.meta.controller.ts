import express from "express";
import debug from "debug";
import emailMetaService from "../services/email.meta.service";
import sendEmailService from "../services/send.email.service";

const log: debug.IDebugger = debug("app:email-meta-controller");

class EmailMetaController {

  async updateEmailMeta(req: express.Request, res: express.Response) {
    try {
      log(await emailMetaService.updateEmailMeta(req.body));
      res.status(200).send();
    } catch (err) {
      log("update email error: %O", err);
      return res.status(500).send();
    }
  }

  async sendEmail(req: express.Request, res: express.Response) {
    try {
      log(await sendEmailService.sendEmail(req.body));
      res.status(200).send();
    } catch (err) {
      log("update email error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new EmailMetaController();
