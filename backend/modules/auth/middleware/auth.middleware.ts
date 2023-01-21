import express from "express";
import usersService from "../../users/services/users.service";
import * as argon2 from "argon2";
import { body } from 'express-validator';

class AuthMiddleware {
  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByEmailWithPassword(
      req.body.email
    );
    console.log("user found", user);
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, req.body.password)) {
        req.body = {
          userId: user.id,
          email: user.email
        };

        res.locals.firstName = user.firstName;
        res.locals.lastName = user.lastName;
        res.locals.id = user.id;
        return next();
      }
    }
    // Giving the same message in both cases
    // helps protect against cracking attempts:
    res.status(400).send({ errors: ["Invalid email and/or password"] });
  }

  async hashPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      req.body.password = await argon2.hash(req.body.password);
      return next();
    } catch(err) {
      res.status(400).send({ errors: "Issue in password encryption" });
    }
  }
}

export default new AuthMiddleware();
