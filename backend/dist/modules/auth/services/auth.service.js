"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_dao_1 = __importDefault(require("../daos/auth.dao"));
const tokenExpirationInSeconds = 36000;
// @ts-expect-error
const jwtSecret = process.env.JWT_SECRET;
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
    generateLoginResponse(reqBody, resLocals) {
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
        };
    }
    deleteUser(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield auth_dao_1.default.deleteUser(reqBody.userEmail);
            }
            catch (error) {
                console.error("Error in deleting user", error);
            }
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9hdXRoL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixnRUFBK0I7QUFDL0IsZ0VBQXVDO0FBR3ZDLE1BQU0sd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLG1CQUFtQjtBQUNuQixNQUFNLFNBQVMsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUNqRCxNQUFNLFdBQVc7SUFBakI7UUFDRSxTQUFJLEdBQXFCLEVBQXNCLENBQUM7SUFpRGxELENBQUM7SUEvQ0Msa0JBQWtCLENBQUMsU0FBaUI7UUFDbEMsSUFBSSxJQUFJLEdBQUcsZ0JBQU07YUFDZCxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQy9DLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxXQUF5QixFQUFFLFNBQWlCO1FBQ2pFLE9BQU8sc0JBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRTtZQUN0QyxTQUFTLEVBQUUsd0JBQXdCO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxPQUFZLEVBQUUsU0FBYztRQUNoRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM3QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNyRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlELE9BQU87WUFDTCxXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsSUFBSTtZQUNsQixJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO2dCQUM5QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7Z0JBQzVCLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRTthQUNqQjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUssVUFBVSxDQUFDLE9BQVk7O1lBQzNCLElBQUk7Z0JBQ0YsT0FBTyxNQUFNLGtCQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUNuRDtZQUFDLE9BQU0sS0FBSyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksV0FBVyxFQUFFLENBQUMifQ==