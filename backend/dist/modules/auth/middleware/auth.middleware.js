"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const users_service_1 = __importDefault(require("../../users/services/users.service"));
const argon2 = __importStar(require("argon2"));
class AuthMiddleware {
    verifyUserPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmailWithPassword(req.body.email);
            console.log("user found", user);
            if (user) {
                const passwordHash = user.password;
                if (yield argon2.verify(passwordHash, req.body.password)) {
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
        });
    }
    hashPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.password = yield argon2.hash(req.body.password);
                res.locals.firstName = req.body.firstName;
                res.locals.lastName = req.body.lastName;
                return next();
            }
            catch (err) {
                res.status(400).send({ errors: "Issue in password encryption" });
            }
        });
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9hdXRoL21pZGRsZXdhcmUvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RkFBOEQ7QUFDOUQsK0NBQWlDO0FBR2pDLE1BQU0sY0FBYztJQUNaLGtCQUFrQixDQUN0QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxJQUFJLEdBQVEsTUFBTSx1QkFBWSxDQUFDLDBCQUEwQixDQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDZixDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3hELEdBQUcsQ0FBQyxJQUFJLEdBQUc7d0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztxQkFDbEIsQ0FBQztvQkFFRixHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUN4QixPQUFPLElBQUksRUFBRSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCx3Q0FBd0M7WUFDeEMsMkNBQTJDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsK0JBQStCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUNoQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSTtnQkFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFekQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ2Y7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7YUFDbEU7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==