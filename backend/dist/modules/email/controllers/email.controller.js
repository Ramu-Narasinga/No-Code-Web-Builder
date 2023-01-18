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
                let createEmailRes = yield email_service_1.default.createEmail(createEmailPayload);
                res.status(200).send({ email: createEmailRes });
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
                let updateEmailRes = yield email_service_1.default.updateEmail(req.body);
                res.status(200).send(updateEmailRes);
            }
            catch (err) {
                log("update email error: %O", err);
                return res.status(500).send();
            }
        });
    }
    updateEmailBuilder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updateEmailBuilderPayload = Object.assign(Object.assign({}, req.body), { id: +req.params.id });
                let updateEmailRes = yield email_service_1.default.updateEmail(updateEmailBuilderPayload);
                res.status(200).send(updateEmailRes);
            }
            catch (err) {
                log("update website error: %O", err);
                return res.status(500).send();
            }
        });
    }
    deleteEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let deleteWebsiteByIdPayload = {
                    id: +req.params.id
                };
                let deleteEmailRes = yield email_service_1.default.deleteEmail(deleteWebsiteByIdPayload);
                res.status(200).send(deleteEmailRes);
            }
            catch (err) {
                log("update website error: %O", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new EmailController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvY29udHJvbGxlcnMvZW1haWwuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQiw4RUFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxlQUFlO0lBRWIsWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELElBQUk7Z0JBQ0YsSUFBSSxtQkFBbUIsR0FBRztvQkFDeEIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUNuQixDQUFBO2dCQUNELElBQUksS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxJQUFJO2dCQUNGLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLElBQUksZ0JBQWdCLEdBQUc7b0JBQ3JCLE1BQU07aUJBQ1AsQ0FBQTtnQkFDRCxJQUFJLE1BQU0sR0FBRyxNQUFN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