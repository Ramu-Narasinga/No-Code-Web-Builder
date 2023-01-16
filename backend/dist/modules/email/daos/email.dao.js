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
const log = (0, debug_1.default)("app:in-memory-dao");
class EmailDao {
    constructor() {
        log("Created new instance of EmailDao");
        this.prisma = prisma_service_1.default.getPrismaClient();
    }
    createEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.email.create({
                    data: Object.assign(Object.assign({}, email), { emailMeta: {
                            create: {
                                fromName: "",
                                subject: ""
                            }
                        } }),
                });
            }
            catch (err) {
                console.error("Error in creating email %0", err);
            }
        });
    }
    updateEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.email.update({
                where: {
                    id: email.id
                },
                data: Object.assign({}, email),
            });
        });
    }
}
exports.default = new EmailDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9kYW9zL2VtYWlsLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFLMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxRQUFRO0lBR1o7UUFDRSxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUlLLFdBQVcsQ0FBQyxLQUFrQjs7WUFDbEMsSUFBSTtnQkFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNwQyxJQUFJLGtDQUNDLEtBQUssS0FDUixTQUFTLEVBQUU7NEJBQ1QsTUFBTSxFQUFFO2dDQUNOLFFBQVEsRUFBRSxFQUFFO2dDQUNaLE9BQU8sRUFBRSxFQUFFOzZCQUNaO3lCQUNGLEdBQ0Y7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2xEO1FBRUgsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEtBQWtCOztZQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO2lCQUNiO2dCQUNELElBQUksb0JBQ0MsS0FBSyxDQUNUO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=