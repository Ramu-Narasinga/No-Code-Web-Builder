import express from "express";
import debug from "debug";
import recipientService from "../services/recipient.service";

const log: debug.IDebugger = debug("app:recipient-controller");

class RecipientController {

  async createRecipients(req: express.Request, res: express.Response) {
    try {
      console.log("inside createREcipients APi contoller", req.body);
      log(await recipientService.createRecipients(req.body));
      res.status(200).send();
    } catch (err) {
      log("create recipient error: %O", err);
      return res.status(500).send();
    }
  }

  async updateRecipients(req: express.Request, res: express.Response) {
    try {
      log(await recipientService.updateRecipients(req.body));
      res.status(200).send();
    } catch (err) {
      log("create recipient error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new RecipientController();
