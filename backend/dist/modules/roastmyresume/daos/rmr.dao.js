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
class RmrDao {
    constructor() {
        this.prisma = prisma_service_1.default.getPrismaClient();
        log('Created new instance of RmrDao');
    }
    createUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.rmr_User.create({
                data: Object.assign({}, userFields),
            });
        });
    }
}
exports.default = new RmrDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvcm9hc3RteXJlc3VtZS9kYW9zL3Jtci5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRkFBaUU7QUFDakUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sTUFBTTtJQUlSO1FBRkEsV0FBTSxHQUFHLHdCQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7UUFHdkMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxVQUF5Qjs7WUFFeEMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsSUFBSSxvQkFDQyxVQUFVLENBQ2Q7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMifQ==