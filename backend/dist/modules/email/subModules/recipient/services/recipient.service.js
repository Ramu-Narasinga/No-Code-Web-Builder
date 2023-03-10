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
const recipient_dao_1 = __importDefault(require("../daos/recipient.dao"));
class RecipientService {
    createRecipients(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield recipient_dao_1.default.createRecipients(resource);
        });
    }
    updateRecipients(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield recipient_dao_1.default.updateRecipients(resource);
        });
    }
    getRecipients(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield recipient_dao_1.default.getRecipients(resource);
        });
    }
}
exports.default = new RecipientService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VtYWlsL3N1Yk1vZHVsZXMvcmVjaXBpZW50L3NlcnZpY2VzL3JlY2lwaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQWlEO0FBS2pELE1BQU0sZ0JBQWdCO0lBRWQsZ0JBQWdCLENBQUMsUUFBeUI7O1lBQzlDLE9BQU8sTUFBTSx1QkFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLFFBQXlCOztZQUM5QyxPQUFPLE1BQU0sdUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsUUFBdUI7O1lBQ3pDLE9BQU8sTUFBTSx1QkFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyJ9