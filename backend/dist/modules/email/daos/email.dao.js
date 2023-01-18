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
const client_1 = require("@prisma/client");
const log = (0, debug_1.default)("app:in-memory-dao");
class EmailDao {
    constructor() {
        log("Created new instance of EmailDao");
        this.prisma = prisma_service_1.default.getPrismaClient();
    }
    getEmailById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = payload;
                console.log("payload before getwebsites command", payload);
                return yield this.prisma.email.findUnique({
                    where: {
                        id
                    }
                });
            }
            catch (err) {
                console.log("found err:", err);
                throw new Error('Errro encountered in fetching email by id');
            }
        });
    }
    getEmails(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { userId } = payload;
                console.log("payload before getwebsites command", payload);
                return yield this.prisma.email.findMany({
                    where: {
                        userId: {
                            equals: userId
                        }
                    }
                });
            }
            catch (err) {
                console.log("found err:", err);
                throw new Error('Errro encountered in fetching websites');
            }
        });
    }
    createEmail(email) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = Object.assign(Object.assign({}, email), { status: client_1.Status.DRAFT, html: (_a = process.env.emailDefaultTemplateHtml) !== null && _a !== void 0 ? _a : '', css: (_b = process.env.emailDefaultTemplateCss) !== null && _b !== void 0 ? _b : '' });
                console.log("data before create command");
                return yield this.prisma.email.create({
                    data
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
    deleteEmail(deleteEmailByIdPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.email.delete({
                where: {
                    id: deleteEmailByIdPayload.id
                }
            });
        });
    }
}
exports.default = new EmailDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9kYW9zL2VtYWlsLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFDMUIsMkNBQXNEO0FBS3RELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQUdaO1FBQ0UsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx3QkFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFSyxZQUFZLENBQUMsT0FBb0I7O1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxFQUNGLEVBQUUsRUFDSCxHQUFHLE9BQU8sQ0FBQztnQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUUzRCxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUN4QyxLQUFLLEVBQUU7d0JBQ0wsRUFBRTtxQkFDSDtpQkFDRixDQUFDLENBQUE7YUFDSDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsT0FBcUI7O1lBQ25DLElBQUk7Z0JBQ0YsSUFBSSxFQUNGLE1BQU0sRUFDUCxHQUFHLE9BQU8sQ0FBQztnQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUUzRCxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUN0QyxLQUFLLEVBQUU7d0JBQ0wsTUFBTSxFQUFHOzRCQUNQLE1BQU0sRUFBRSxNQUFNO3lCQUNmO3FCQUNGO2lCQUNGLENBQUMsQ0FBQTthQUNIO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQzthQUMzRDtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxLQUFrQjs7O1lBQ2xDLElBQUk7Z0JBRUYsSUFBSSxJQUFJLG1DQUNILEtBQUssS0FDUixNQUFNLEVBQUUsZUFBTSxDQUFDLEtBQUssRUFDcEIsSUFBSSxFQUFFLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsbUNBQUksRUFBRSxFQUNoRCxHQUFHLEVBQUUsTUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixtQ0FBSSxFQUFFLEdBQy9DLENBQUE7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUUxQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNwQyxJQUFJO2lCQUNMLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNsRDs7S0FFRjtJQUVLLFdBQVcsQ0FBQyxLQUFrQjs7WUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDcEMsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtpQkFDYjtnQkFDRCxJQUFJLG9CQUNDLEtBQUssQ0FDVDthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxzQkFBc0M7O1lBQ3RELE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsc0JBQXNCLENBQUMsRUFBRTtpQkFDOUI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMifQ==