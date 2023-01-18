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
    getEmailById(getEmailByIdPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return email_dao_1.default.getEmailById(getEmailByIdPayload);
            }
            catch (err) {
                console.log("Error in get website service", err);
                throw new Error("Error in fetching websites");
            }
        });
    }
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
    deleteEmail(deleteWebsiteByIdPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield email_dao_1.default.deleteEmail(deleteWebsiteByIdPayload);
            }
            catch (err) {
                console.log("Error in deleting website service", err);
                throw new Error('Errro encountered in deleting website');
            }
        });
    }
}
exports.default = new EmailService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvc2VydmljZXMvZW1haWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUF5QztBQUl6QyxNQUFNLFlBQVk7SUFFVixZQUFZLENBQUMsbUJBQWdDOztZQUNqRCxJQUFJO2dCQUNGLE9BQU8sbUJBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUNuRDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxnQkFBOEI7O1lBQzVDLElBQUk7Z0JBQ0YsT0FBTyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzdDO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLFFBQXFCOztZQUNyQyxJQUFJO2dCQUNGLE9BQU8sTUFBTSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QztZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxRQUFxQjs7WUFDckMsT0FBTyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsd0JBQXdDOztZQUN4RCxJQUFJO2dCQUNGLE9BQU8sTUFBTSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQzdEO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=