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
const email_dao_1 = __importDefault(require("../daos/email.dao"));
class EmailService {
    getEmails(getEmailsPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return email_dao_1.default.getEmails(getEmailsPayload);
            }
            catch (err) {
                console.log("Error in get website service", err);
                throw new Error("Error in fetching websites");
            }
        });
    }
    createEmail(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield email_dao_1.default.createEmail(resource);
            }
            catch (err) {
                console.log("Error in create website service", err);
                throw new Error('Errro encountered in creating website');
            }
        });
    }
    updateEmail(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return email_dao_1.default.updateEmail(resource);
        });
    }
}
exports.default = new EmailService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvc2VydmljZXMvZW1haWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUF5QztBQUl6QyxNQUFNLFlBQVk7SUFFVixTQUFTLENBQUMsZ0JBQThCOztZQUM1QyxJQUFJO2dCQUNGLE9BQU8sbUJBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUM3QztZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxRQUFxQjs7WUFDckMsSUFBSTtnQkFDRixPQUFPLE1BQU0sbUJBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0M7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsUUFBcUI7O1lBQ3JDLE9BQU8sbUJBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=