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
const email_service_1 = __importDefault(require("../services/email.service"));
const log = (0, debug_1.default)("app:website-controller");
class EmailController {
    getEmails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = res.locals.jwt.userId;
                console.log("userId:", userId);
                let getEmailsPayload = {
                    userId
                };
                let emails = yield email_service_1.default.getEmails(getEmailsPayload);
                res.status(200).send(emails);
            }
            catch (err) {
                log("create website error: %O", err);
                return res.status(500).send();
            }
        });
    }
    createEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("res.locals.jwt:", res.locals.jwt);
                let userId = res.locals.jwt.userId;
                let createEmailPayload = Object.assign(Object.assign({}, req.body), { userId });
                log(yield email_service_1.default.createEmail(createEmailPayload));
                res.status(200).send();
            }
            catch (err) {
                log("create email error: %O", err);
                return res.status(500).send();
            }
        });
    }
    updateEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield email_service_1.default.updateEmail(req.body));
                res.status(200).send();
            }
            catch (err) {
                log("update email error: %O", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new EmailController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvY29udHJvbGxlcnMvZW1haWwuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQiw4RUFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxlQUFlO0lBRWIsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELElBQUk7Z0JBQ0YsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxnQkFBZ0IsR0FBRztvQkFDckIsTUFBTTtpQkFDUCxDQUFBO2dCQUNELElBQUksTUFBTSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxJQUFJO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxJQUFJLGtCQUFrQixtQ0FDakIsR0FBRyxDQUFDLElBQUksS0FDWCxNQUFNLEdBQ1AsQ0FBQTtnQkFDRCxHQUFHLENBQUMsTUFBTSx1QkFBWSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxJQUFJO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLHVCQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==