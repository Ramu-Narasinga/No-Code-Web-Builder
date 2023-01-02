import express from "express";
import debug from "debug";
import emailService from "../services/email.service";

const log: debug.IDebugger = debug("app:website-controller");

class EmailController {
 
  async createEmail(req: express.Request, res: express.Response) {
    try {
      log(await emailService.createEmail(req.body));
      res.status(200).send();
    } catch (err) {
      log("create email error: %O", err);
      return res.status(500).send();
    }
  }

  async updateEmail(req: express.Request, res: express.Response) {
    try {
      log(await emailService.updateEmail(req.body));
      res.status(200).send();
    } catch (err) {
      log("update email error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new EmailController();
