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
      jwtMiddleware.validJWTNeeded,
      body("activityType").isString(),
      body("city").isString(),
      body("region").isString(),
      body("country").isString(),
      body("userId").isInt(),
      body("websiteId").isInt(),
      body("activityEvents").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      visitorActivityController.createFeedbackActivity,
    ]);

    return this.app;
  }
}
