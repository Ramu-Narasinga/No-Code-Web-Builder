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
    createWebsite(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return website_dao_1.default.createWebsite(resource);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy93ZWJzaXRlL3NlcnZpY2VzL3dlYnNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2QztBQUk3QyxNQUFNLGNBQWM7SUFDWixhQUFhLENBQUMsUUFBMEI7O1lBQzVDLElBQUk7Z0JBQ0YsT0FBTyxxQkFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQztZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxRQUEwQjs7WUFDNUMsT0FBTyxxQkFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==