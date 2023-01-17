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
const website_dao_1 = __importDefault(require("../daos/website.dao"));
class WebsiteService {
    getWebsites(getWebsitesPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return website_dao_1.default.getWebsites(getWebsitesPayload);
            }
            catch (err) {
                console.log("Error in get website service", err);
                throw new Error("Error in fetching websites");
            }
        });
    }
    createWebsite(createWebsitePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield website_dao_1.default.createWebsite(createWebsitePayload);
            }
            catch (err) {
                console.log("Error in create website service", err);
                throw new Error('Errro encountered in creating website');
            }
        });
    }
    updateWebsite(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return website_dao_1.default.updateWebsite(resource);
        });
    }
}
exports.default = new WebsiteService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy93ZWJzaXRlL3NlcnZpY2VzL3dlYnNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2QztBQUs3QyxNQUFNLGNBQWM7SUFFWixXQUFXLENBQUMsa0JBQWtDOztZQUNsRCxJQUFJO2dCQUNGLE9BQU8scUJBQVUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNuRDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxvQkFBc0M7O1lBQ3hELElBQUk7Z0JBQ0YsT0FBTyxNQUFNLHFCQUFVLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDN0Q7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsUUFBMEI7O1lBQzVDLE9BQU8scUJBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=