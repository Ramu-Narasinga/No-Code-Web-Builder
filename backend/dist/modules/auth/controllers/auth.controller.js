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
const debug_1 = __importDefault(require("debug"));
const users_service_1 = __importDefault(require("../../users/services/users.service"));
const auth_service_1 = __importDefault(require("../services/auth.service"));
const log = (0, debug_1.default)("app:auth-controller");
class AuthController {
    constructor() {
        // dotenv.config();
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("inside auth controller");
                let createdUser = yield users_service_1.default.createUser(req.body);
                console.log("createdUser:", createdUser);
                res.locals.id = createdUser.id;
                req.body.userId = createdUser.id;
                let loginRes = auth_service_1.default.generateLoginResponse(req.body, res.locals);
                res.status(200).send(loginRes);
            }
            catch (err) {
                log("createJWT error: %O", err);
                console.log("inside controller error", err);
                return res.status(500).send();
            }
        });
    }
    createJWT(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let loginRes = auth_service_1.default.generateLoginResponse(req.body, res.locals);
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
                loginRes);
            }
            catch (err) {
                log("createJWT error: %O", err);
                return res.status(500).send();
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let deleteUserRes = auth_service_1.default.deleteUser(req.body);
                return res.status(201).send(deleteUserRes);
            }
            catch (err) {
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9hdXRoL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQix1RkFBOEQ7QUFDOUQsNEVBQW1EO0FBRW5ELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTFELE1BQU0sY0FBYztJQUNsQjtRQUNFLG1CQUFtQjtJQUNyQixDQUFDO0lBRUssWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELElBQUk7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLFdBQVcsR0FBRyxNQUFNLHVCQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxHQUFHLHNCQUFXLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsSUFBSTtnQkFDRixJQUFJLFFBQVEsR0FBRyxzQkFBVyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN0RSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtnQkFDM0IsT0FBTztnQkFDUCx5QkFBeUI7Z0JBQ3pCLHdCQUF3QjtnQkFDeEIsWUFBWTtnQkFDWix1Q0FBdUM7Z0JBQ3ZDLHFDQUFxQztnQkFDckMsd0JBQXdCO2dCQUN4QixNQUFNO2dCQUNOLElBQUk7Z0JBQ0osUUFBUSxDQUNQLENBQUM7YUFDSDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELElBQUk7Z0JBQ0YsSUFBSSxhQUFhLEdBQUcsc0JBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQzNDO1lBQUMsT0FBTyxHQUFHLEVBQUU7YUFFYjtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9