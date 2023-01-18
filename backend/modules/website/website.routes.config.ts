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

    this.app.get('/website/:id', [
      jwtMiddleware.validJWTNeeded,
      websiteController.getWebsiteById,
    ]);

    this.app.get('/website', [
      jwtMiddleware.validJWTNeeded,
      websiteController.getWebsites,
    ]);

    this.app.post(`/website`, [
      jwtMiddleware.validJWTNeeded,
      body("title").isString(),
      body("description").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      websiteController.createWebsite,
    ]);

    this.app.put(`/website`, [
      jwtMiddleware.validJWTNeeded,
      body("id").isNumeric(),
      body("title").exists().isString(),
      body("description").exists().isString(),
      body("status").exists().isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      websiteController.updateWebsite,
    ]);

    this.app.post(`/website/:id/builder`, [
      body("html").isString(),
      body("css").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      websiteController.updateWebsiteBuilder,
    ]);

    this.app.delete(`/website/:id`, [
      jwtMiddleware.validJWTNeeded,
      websiteController.deleteWebsite,
    ])

    return this.app;
  }
}