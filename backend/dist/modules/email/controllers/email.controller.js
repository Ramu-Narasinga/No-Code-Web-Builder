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
    getEmailById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let getEmailByIdPayload = {
                    id: +req.params.id
                };
                let email = yield email_service_1.default.getEmailById(getEmailByIdPayload);
                res.status(200).send(email);
            }
            catch (err) {
                log("create website error: %O", err);
                return res.status(500).send();
            }
        });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvY29udHJvbGxlcnMvZW1haWwuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQiw4RUFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxlQUFlO0lBRWIsWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELElBQUk7Z0JBQ0YsSUFBSSxtQkFBbUIsR0FBRztvQkFDeEIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUNuQixDQUFBO2dCQUNELElBQUksS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxJQUFJO2dCQUNGLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLElBQUksZ0JBQWdCLEdBQUc7b0JBQ3JCLE1BQU07aUJBQ1AsQ0FBQTtnQkFDRCxJQUFJLE1BQU0sR0FBRyxNQUFNLHVCQUFZLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsSUFBSTtnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsSUFBSSxrQkFBa0IsbUNBQ2pCLEdBQUcsQ0FBQyxJQUFJLEtBQ1gsTUFBTSxHQUNQLENBQUE7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sdUJBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsSUFBSTtnQkFDRixHQUFHLENBQUMsTUFBTSx1QkFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=