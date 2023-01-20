import express, { NextFunction } from "express";
import debug from "debug";
import visitorActivityService from "../services/visitor.activity.service";

const log: debug.IDebugger = debug("app:visitor.activity-controller");

class VisitorActivityController {
 
  async createFeedbackActivity(req: express.Request, res: express.Response) {
    try {
      let createFeedbackActivityRes = await visitorActivityService.createFeedbackActivity(req.body);
      res.status(200).send({id: createFeedbackActivityRes.id});
    } catch (err) {
      log("Create Feedback Activity Error %0:", err);
      return res.status(500).send();
    }
  }

  async updateFeedbackActivityComment(req: express.Request, res: express.Response) {
    try {
      let updateFeedbackActivityCommentRes = await visitorActivityService.updateFeedbackActivityComment(req.body);
      res.status(200).send({id: updateFeedbackActivityCommentRes.id});
    } catch (err) {
      log("Create Feedback Activity Error %0:", err);
      return res.status(500).send();
    }
  }

  async getVisitorActivity(req: express.Request, res: express.Response) {
    try {
      let userId = res.locals.jwt.userId;
      let getVisitorActivityPayload = {
        userId
      }
      let visitorActivity = await visitorActivityService.getVisitorActivity(getVisitorActivityPayload);
      res.status(200).send(visitorActivity);
    } catch (err) {
      log("Create Feedback Activity Error %0:", err);
      return res.status(500).send();
    }
  }

  async getVisitorActivityDetails(req: express.Request, res: express.Response) {
    try {
      let fileName = req.query.fileName as string;
      console.log("inside filename", fileName);
      let visitorActivityDetailsBuffer = await visitorActivityService.getVisitorActivityDetails(fileName);
      let visitorActivityDetails;
      if (visitorActivityDetailsBuffer && visitorActivityDetailsBuffer.Body)        
        visitorActivityDetails = visitorActivityDetailsBuffer.Body.toString('utf-8')
      res.status(200).send(visitorActivityDetails);
    } catch (err) {
      console.log("Error in controller", err);
      return res.status(500).send();
    }
  }
}

export default new VisitorActivityController();
