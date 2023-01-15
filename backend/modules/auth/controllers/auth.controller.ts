import express from "express";
import debug from "debug";
import dotenv from "dotenv";
import usersService from "../../users/services/users.service";
import authService from "../services/auth.service";

const log: debug.IDebugger = debug("app:auth-controller");

/**
 * This value is automatically populated from .env, a file which you will have
 * to create for yourself at the root of the project.
 *
 * See .env.example in the repo for the required format.
 */
// @ts-expect-error
const jwtSecret: string = process.env.JWT_SECRET;
class AuthController {
  constructor() {
    dotenv.config();
  }

  async registerUser(req: express.Request, res: express.Response) {
    try {
      console.log("inside auth controller");
      log(await usersService.createUser(req.body));
      res.status(200).send();
    } catch (err) {
      log("createJWT error: %O", err);
      console.log("inside controller error", err);
      return res.status(500).send();
    }
  }

  async createJWT(req: express.Request, res: express.Response) {
    try {
      log("jwtSecret:", jwtSecret);
      const refreshId = req.body.userId + jwtSecret;
      const hash = authService.generateAndGetHash(refreshId);
      req.body.refreshKey = authService.generateAndGetRefreshKey();
      const token = authService.generateAndGetJwtToken(req.body, jwtSecret);
      return res.status(201).send({ 
        accessToken: token, 
        refreshToken: hash,
        userId: req.body.userId
      });
    } catch (err) {
      log("createJWT error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new AuthController();
