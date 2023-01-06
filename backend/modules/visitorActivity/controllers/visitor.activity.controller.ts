import express, { NextFunction } from "express";
import debug from "debug";
import visitorActivityService from "../services/visitor.activity.service";

const log: debug.IDebugger = debug("app:visitor.activity-controller");

class VisitorActivityController {
 
  async createFeedbackActivity(req: express.Request, res: express.Response) {
    try {

      let activityEvents = res.locals.activityEventsRes.Location;

      let payload = {...req.body, activityEvents};

      log(await visitorActivityService.createFeedbackActivity(payload));
      res.status(200).send();
    } catch (err) {
      log("Create Feedback Activity Error %0:", err);
      return res.status(500).send();
    }
  }

  async uploadActivityEvents(req: express.Request, res: express.Response, next: NextFunction) {
    try {
      let activityEventsRes = await visitorActivityService.uploadActivityEvents(req.body);
      console.log("activityEventsRes:", activityEventsRes);
      res.locals.activityEventsRes = activityEventsRes;
      next();
    } catch (err) {
      log("Upload Activity Events Error in controller %0:", err);
      return res.status(500).send();
    }
  }
}

export default new VisitorActivityController();
