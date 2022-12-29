import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import { body } from "express-validator";
import jwtMiddleware from "../auth/middleware/jwt.middleware";
import websiteController from "./controllers/website.controller";

export class EmailRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "EmailRoutes");
  }

  configureRoutes(): express.Application {
    
    this.app.post(`/email`, [
      jwtMiddleware.validJWTNeeded,
      body("title").isString(),
      body("description").isString(),
      body("status").isString(),
      body("html").isString(),
      body("css").isString(),
      body("userId").isInt(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      websiteController.createWebsite,
    ]);

    this.app.put(`/email`, [
      jwtMiddleware.validJWTNeeded,
      body("id").isNumeric(),
      body("title").exists().isString(),
      body("description").exists().isString(),
      body("status").exists().isString(),
      body("html").exists().isString(),
      body("css").exists().isString(),
      body("userId").exists().isInt(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      websiteController.updateWebsite,
    ]);

    return this.app;
  }
}