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

    this.app.post(`/email/meta/recipients`, [
      jwtMiddleware.validJWTNeeded,
      body("emailMetaId").isNumeric(),
      body("recipientEmail").isArray(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      recipientController.createRecipients,
    ]);

    this.app.put(`/email/meta/recipients`, [
      jwtMiddleware.validJWTNeeded,
      body("emailMetaId").isNumeric(),
      body("recipientEmail").isArray(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      recipientController.updateRecipients,
    ]);

    return this.app;
  }
}
