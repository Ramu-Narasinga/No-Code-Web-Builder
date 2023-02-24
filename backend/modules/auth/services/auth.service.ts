import crypto from "crypto";
import jwt from "jsonwebtoken";
import authDao from "../daos/auth.dao";
import { LoginUserDto } from "../dto/login.user.dto";

const tokenExpirationInSeconds = 36000;
// @ts-expect-error
const jwtSecret: string = process.env.JWT_SECRET;
class AuthService {
  salt: crypto.KeyObject = {} as crypto.KeyObject;

  generateAndGetHash(refreshId: string) {
    let hash = crypto
      .createHmac("sha512", this.generateAndGetSalt())
      .update(refreshId)
      .digest("base64");

    return hash;
  }

  generateAndGetSalt() {
    this.salt = crypto.createSecretKey(crypto.randomBytes(16));
    return this.salt;
  }

  generateAndGetRefreshKey() {
    return this.salt.export();
  }

  generateAndGetJwtToken(requestBody: LoginUserDto, jwtSecret: string) {
    return jwt.sign(requestBody, jwtSecret, {
      expiresIn: tokenExpirationInSeconds,
    });
  }

  generateLoginResponse(reqBody: any, resLocals: any) {
    const refreshId = reqBody.userId + jwtSecret;
    const hash = this.generateAndGetHash(refreshId);
    reqBody.refreshKey = this.generateAndGetRefreshKey();
    const token = this.generateAndGetJwtToken(reqBody, jwtSecret);
    return { 
      accessToken: token, 
      refreshToken: hash,
      user: {
        firstName: resLocals.firstName,
        lastName: resLocals.lastName,
        id: resLocals.id
      }
    }
  }

  async deleteUser(reqBody: any) {
    try {
      return await authDao.deleteUser(reqBody.userEmail)
    } catch(error) {
      console.error("Error in deleting user", error);
    }
  }
}

export default new AuthService();
