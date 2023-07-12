import { CommonRoutesConfig } from "../../../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from "../../../common/middleware/body.validation.middleware";
import { body } from "express-validator";
import jwtMiddleware from "../../../auth/middleware/jwt.middleware";
import recipientController from "./controllers/recipient.controller";

export class EmailMetaRecipientsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "EmailMetaRecipientsRoutes");
  }

  configureRoutes(): express.Application {    

    this.app.put(`/email/meta/recipients`, [
      jwtMiddleware.validJWTNeeded,
      body("emailMetaId").isNumeric(),
      body("recipientEmail").isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      recipientController.createRecipient,
    ]);

    this.app.delete(`/email/meta/recipients/:id`, [
      jwtMiddleware.validJWTNeeded,
      recipientController.deleteRecipient,
    ]);

    return this.app;
  }
}
