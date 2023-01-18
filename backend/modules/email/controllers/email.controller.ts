import express from "express";
import debug from "debug";
import emailService from "../services/email.service";

const log: debug.IDebugger = debug("app:website-controller");

class EmailController {

  async getEmailById(req: express.Request, res: express.Response) {
    try {
      let getEmailByIdPayload = {
        id: +req.params.id
      }
      let email = await emailService.getEmailById(getEmailByIdPayload);
      res.status(200).send(email);
    } catch (err) {
      log("create website error: %O", err);
      return res.status(500).send();
    }
  }

  async getEmails(req: express.Request, res: express.Response) {
    try {
      let userId = res.locals.jwt.userId;
      console.log("userId:", userId);
      let getEmailsPayload = {
        userId
      }
      let emails = await emailService.getEmails(getEmailsPayload);
      res.status(200).send(emails);
    } catch (err) {
      log("create website error: %O", err);
      return res.status(500).send();
    }
  }
 
  async createEmail(req: express.Request, res: express.Response) {
    try {
      console.log("res.locals.jwt:", res.locals.jwt);
      let userId = res.locals.jwt.userId;
      let createEmailPayload = {
        ...req.body,
        userId
      }
      let createEmailRes = await emailService.createEmail(createEmailPayload);
      res.status(200).send({email: createEmailRes});
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

  async deleteEmail(req: express.Request, res: express.Response) {
    try {
      let deleteWebsiteByIdPayload = {
        id: +req.params.id
      }
      let deleteEmailRes = await emailService.deleteEmail(deleteWebsiteByIdPayload);
      res.status(200).send(deleteEmailRes);
    } catch (err) {
      log("update website error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new EmailController();
