import { CommonRoutesConfig } from '../common/common.routes.config';
import authController from './controllers/auth.controller';
import authMiddleware from './middleware/auth.middleware';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import { body } from 'express-validator';
import jwtMiddleware from './middleware/jwt.middleware';

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {

        this.app.post(`/auth/register`, [
            body('email').isEmail(),
            body('password').isString(),
            body('firstName').isString(),
            body('lastName').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            authMiddleware.hashPassword,
            authController.registerUser,
        ]);

        this.app.post(`/auth/login`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            authMiddleware.verifyUserPassword,
            authController.createJWT,
        ]);

        this.app.post(`/auth/refresh-token`, [
            jwtMiddleware.validJWTNeeded,
            jwtMiddleware.verifyRefreshBodyField,
            jwtMiddleware.validRefreshNeeded,
            authController.createJWT,
        ]);

        this.app.delete('/auth/delete', [
          body('email').isEmail(),
          body('password').isString(),
          body('userEmail').isString(),
          BodyValidationMiddleware.verifyBodyFieldsErrors,
          authMiddleware.verifyUserPassword,
          authController.deleteUser,
      ])

        return this.app;
    }
}
