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
const prisma_service_1 = __importDefault(require("../../common/services/prisma.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class AuthDao {
    constructor() {
        this.prisma = prisma_service_1.default.getPrismaClient();
        log('Created new instance of UsersDao');
    }
    deleteUser(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.user.delete({
                    where: {
                        email: userEmail,
                    },
                });
            }
            catch (error) {
                console.error("Error in deleting in user in dao", error);
            }
        });
    }
}
exports.default = new AuthDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL2F1dGgvZGFvcy9hdXRoLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFJMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxPQUFPO0lBSVQ7UUFGQSxXQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUdyQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUssVUFBVSxDQUFDLFNBQWlCOztZQUNoQyxJQUFJO2dCQUNGLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ25DLEtBQUssRUFBRTt3QkFDTCxLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFNLEtBQUssRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=