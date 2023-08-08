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

    return this.app;
  }
}
