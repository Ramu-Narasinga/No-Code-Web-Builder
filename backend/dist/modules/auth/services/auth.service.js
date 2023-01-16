"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenExpirationInSeconds = 36000;
class AuthService {
    constructor() {
        this.salt = {};
    }
    generateAndGetHash(refreshId) {
        let hash = crypto_1.default
            .createHmac("sha512", this.generateAndGetSalt())
            .update(refreshId)
            .digest("base64");
        return hash;
    }
    generateAndGetSalt() {
        this.salt = crypto_1.default.createSecretKey(crypto_1.default.randomBytes(16));
        return this.salt;
    }
    generateAndGetRefreshKey() {
        return this.salt.export();
    }
    generateAndGetJwtToken(requestBody, jwtSecret) {
        return jsonwebtoken_1.default.sign(requestBody, jwtSecret, {
            expiresIn: tokenExpirationInSeconds,
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9hdXRoL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUM1QixnRUFBK0I7QUFHL0IsTUFBTSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7QUFDdkMsTUFBTSxXQUFXO0lBQWpCO1FBQ0UsU0FBSSxHQUFxQixFQUFzQixDQUFDO0lBeUJsRCxDQUFDO0lBdkJDLGtCQUFrQixDQUFDLFNBQWlCO1FBQ2xDLElBQUksSUFBSSxHQUFHLGdCQUFNO2FBQ2QsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMvQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQXNCLENBQUMsV0FBeUIsRUFBRSxTQUFpQjtRQUNqRSxPQUFPLHNCQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUU7WUFDdEMsU0FBUyxFQUFFLHdCQUF3QjtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=