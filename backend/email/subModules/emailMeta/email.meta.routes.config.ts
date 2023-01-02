import { CommonRoutesConfig } from "../../../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from "../../../common/middleware/body.validation.middleware";
import { body } from "express-validator";
import jwtMiddleware from "../../../auth/middleware/jwt.middleware";
import emailMetaController from "./controllers/email.meta.controller";

export class EmailMetaRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "EmailMetaRoutes");
  }

  configureRoutes(): express.Application {    

    this.app.put(`/email/meta`, [
      jwtMiddleware.validJWTNeeded,
      body("id").isNumeric(),
      body("fromName").exists().isString(),
      body("subject").exists().isString(),
      body("emailId").isNumeric(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      emailMetaController.updateEmailMeta,
    ]);

    this.app.post(`/email/send`, [
      jwtMiddleware.validJWTNeeded,
      body("emailMetaId").isNumeric(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      emailMetaController.sendEmail,
    ]);

    return this.app;
  }
}
