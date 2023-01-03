import express from "express";
import debug from "debug";
import visitorActivityService from "../services/visitor.activity.service";

const log: debug.IDebugger = debug("app:visitor.activity-controller");

class VisitorActivityController {
 
  async createFeedbackActivity(req: express.Request, res: express.Response) {
    try {
      log(await visitorActivityService.createWebsite(req.body));
      res.status(200).send();
    } catch (err) {
      log("create website error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new VisitorActivityController();
