import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import { body } from "express-validator";
import jwtMiddleware from "../auth/middleware/jwt.middleware";
import visitorActivityController from "./controllers/visitor.activity.controller";

export class VisitorActivityRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "VisitorActivityRoutes");
  }

  configureRoutes(): express.Application {
    
    this.app.post(`/feedback-activity`, [
      body("activityType").isString(),
      body("userId").isInt(),
      body("websiteId").isInt(),
      body("activityEvents").isArray(),
      body("rating").exists().isNumeric(),
      body("comment").exists().isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      visitorActivityController.createFeedbackActivity,
    ]);

    this.app.post(`/error-activity`, [
      body("activityType").isString(),
      body("userId").isInt(),
      body("websiteId").isInt(),
      body("activityEvents").isArray(),
      body("endpoint").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      visitorActivityController.createFeedbackActivity,
    ]);

    this.app.put('/feedback-activity', [
      body("id").isNumeric(),
      body("comment").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      visitorActivityController.updateFeedbackActivityComment
    ]);

    this.app.get(`/visitor-activity`, [
      jwtMiddleware.validJWTNeeded,
      visitorActivityController.getVisitorActivity,
    ]);

    this.app.get('/visitor-activity/details', [
      jwtMiddleware.validJWTNeeded,
      visitorActivityController.getVisitorActivityDetails
    ]);

    return this.app;
  }
}
