import crypto from "crypto";
import jwt from "jsonwebtoken";
import { LoginUserDto } from "../dto/login.user.dto";

const tokenExpirationInSeconds = 36000;
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
}

export default new AuthService();
