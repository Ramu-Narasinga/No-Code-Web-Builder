import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import { body } from "express-validator";
import RmRController from "./controllers/rmr.controller";

export class RoastMyResumeRoutes extends CommonRoutesConfig {
  
  constructor(app: express.Application) {
    super(app, "RoastMyResumeRoutes");
  }

  configureRoutes(): express.Application {
    
    this.app.post(`/rmr-upload`, [
      RmRController.roastResume,
    ]);

    this.app.put(`/rmr-upload`, [
      body("id").isNumeric(),
      body("email").isEmail(),
      body("name").isString(),
      body("newsletterSubscribed").isBoolean(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      RmRController.updateUserRecord,
    ]);

    return this.app;
  }
}
