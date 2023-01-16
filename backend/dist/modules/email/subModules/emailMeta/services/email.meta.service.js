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
const email_meta_dao_1 = __importDefault(require("../daos/email.meta.dao"));
class EmailMetaService {
    updateEmailMeta(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield email_meta_dao_1.default.updateEmailMeta(resource);
        });
    }
    getEmailByMetaId(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield email_meta_dao_1.default.getEmail(resource);
        });
    }
}
exports.default = new EmailMetaService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwubWV0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9zdWJNb2R1bGVzL2VtYWlsTWV0YS9zZXJ2aWNlcy9lbWFpbC5tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBa0Q7QUFJbEQsTUFBTSxnQkFBZ0I7SUFFZCxlQUFlLENBQUMsUUFBeUI7O1lBQzdDLE9BQU8sTUFBTSx3QkFBWSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxRQUEwQjs7WUFDL0MsT0FBTyxNQUFNLHdCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIn0=