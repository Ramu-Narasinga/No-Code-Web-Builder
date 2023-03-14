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
const prisma_service_1 = __importDefault(require("../../../../common/services/prisma.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:email-meta-dao");
class EmailMetaDao {
    constructor() {
        log("Created new instance of EmailDao");
        this.prisma = prisma_service_1.default.getPrismaClient();
    }
    updateEmailMeta(emailMeta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.emailMeta.update({
                where: {
                    id: emailMeta.id
                },
                data: Object.assign({}, emailMeta),
            });
        });
    }
    getEmail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.emailMeta.findUnique({
                where: {
                    id: payload.emailMetaId
                },
                include: {
                    email: true
                }
            });
        });
    }
}
exports.default = new EmailMetaDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwubWV0YS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VtYWlsL3N1Yk1vZHVsZXMvZW1haWxNZXRhL2Rhb3MvZW1haWwubWV0YS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnR0FBdUU7QUFDdkUsa0RBQTBCO0FBSzFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXpELE1BQU0sWUFBWTtJQUdoQjtRQUNFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0ssZUFBZSxDQUFDLFNBQTBCOztZQUU5QyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUN4QyxLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFO2lCQUNqQjtnQkFDRCxJQUFJLG9CQUNDLFNBQVMsQ0FDYjthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxPQUF5Qjs7WUFDdEMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztnQkFDNUMsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxPQUFPLENBQUMsV0FBVztpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=