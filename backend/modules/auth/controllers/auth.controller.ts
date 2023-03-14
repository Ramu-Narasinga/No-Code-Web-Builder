import express from "express";
import debug from "debug";
import dotenv from "dotenv";
import usersService from "../../users/services/users.service";
import authService from "../services/auth.service";

const log: debug.IDebugger = debug("app:auth-controller");

class AuthController {
  constructor() {
    // dotenv.config();
  }

  async registerUser(req: express.Request, res: express.Response) {
    try {
      console.log("inside auth controller");
      let createdUser = await usersService.createUser(req.body);
      console.log("createdUser:", createdUser);
      res.locals.id = createdUser.id;
      let loginRes = authService.generateLoginResponse(req.body, res.locals)
      res.status(200).send(loginRes);
    } catch (err) {
      log("createJWT error: %O", err);
      console.log("inside controller error", err);
      return res.status(500).send();
    }
  }

  async createJWT(req: express.Request, res: express.Response) {
    try {
      let loginRes = authService.generateLoginResponse(req.body, res.locals)
      return res.status(201).send(
      //   { 
      //   accessToken: token, 
      //   refreshToken: hash,
      //   user: {
      //     firstName: res.locals.firstName,
      //     lastName: res.locals.lastName,
      //     id: res.locals.id
      //   }
      // }
      loginRes
      );
    } catch (err) {
      log("createJWT error: %O", err);
      return res.status(500).send();
    }
  }

  async deleteUser(req: express.Request, res: express.Response) {
    try {
      let deleteUserRes = authService.deleteUser(req.body);
      return res.status(201).send(deleteUserRes)
    } catch (err) {

    }
  }
}

export default new AuthController();