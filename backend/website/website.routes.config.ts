import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import { body } from "express-validator";
import jwtMiddleware from "../auth/middleware/jwt.middleware";
import websiteController from "./controllers/website.controller";

export class WebsiteRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "WebsiteRoutes");
  }

  configureRoutes(): express.Application {
    this.app.post(`/website`, [
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

    return this.app;
  }
}
