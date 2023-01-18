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
    getWebsiteById(getWebsiteByIdPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return website_dao_1.default.getWebsiteById(getWebsiteByIdPayload);
            }
            catch (err) {
                console.log("Error in get website service", err);
                throw new Error("Error in fetching websites");
            }
        });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy93ZWJzaXRlL3NlcnZpY2VzL3dlYnNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2QztBQUs3QyxNQUFNLGNBQWM7SUFFWixjQUFjLENBQUMscUJBQW9DOztZQUN2RCxJQUFJO2dCQUNGLE9BQU8scUJBQVUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN6RDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxrQkFBa0M7O1lBQ2xELElBQUk7Z0JBQ0YsT0FBTyxxQkFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ25EO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLG9CQUFzQzs7WUFDeEQsSUFBSTtnQkFDRixPQUFPLE1BQU0scUJBQVUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUM3RDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxRQUEwQjs7WUFDNUMsT0FBTyxxQkFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==