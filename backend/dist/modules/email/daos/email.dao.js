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
                    },
                    include: {
                        emailMeta: {
                            include: {
                                recipients: true
                            }
                        }
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
                        },
                    },
                    include: {
                        emailMeta: {
                            include: {
                                recipients: true
                            }
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
                    data: Object.assign(Object.assign({}, data), { emailMeta: {
                            create: {
                                subject: ''
                            }
                        } })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9kYW9zL2VtYWlsLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFDMUIsMkNBQXNEO0FBS3RELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQUdaO1FBQ0UsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx3QkFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFSyxZQUFZLENBQUMsT0FBb0I7O1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxFQUNGLEVBQUUsRUFDSCxHQUFHLE9BQU8sQ0FBQztnQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUUzRCxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUN4QyxLQUFLLEVBQUU7d0JBQ0wsRUFBRTtxQkFDSDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsU0FBUyxFQUFFOzRCQUNULE9BQU8sRUFBRTtnQ0FDUCxVQUFVLEVBQUUsSUFBSTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLE9BQXFCOztZQUNuQyxJQUFJO2dCQUNGLElBQUksRUFDRixNQUFNLEVBQ1AsR0FBRyxPQUFPLENBQUM7Z0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFM0QsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDdEMsS0FBSyxFQUFFO3dCQUNMLE1BQU0sRUFBRzs0QkFDUCxNQUFNLEVBQUUsTUFBTTt5QkFDZjtxQkFDRjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsU0FBUyxFQUFFOzRCQUNULE9BQU8sRUFBRTtnQ0FDUCxVQUFVLEVBQUUsSUFBSTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2FBQzNEO1FBQ0gsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEtBQWtCOzs7WUFDbEMsSUFBSTtnQkFFRixJQUFJLElBQUksbUNBQ0gsS0FBSyxLQUNSLE1BQU0sRUFBRSxlQUFNLENBQUMsS0FBSyxFQUNwQixJQUFJLEVBQUUsTUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixtQ0FBSSxFQUFFLEVBQ2hELEdBQUcsRUFBRSxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLG1DQUFJLEVBQUUsR0FDL0MsQ0FBQTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBRTFDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQ3BDLElBQUksa0NBQ0MsSUFBSSxLQUNQLFNBQVMsRUFBRTs0QkFDVCxNQUFNLEVBQ0o7Z0NBQ0UsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7eUJBQ0osR0FDRjtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbEQ7O0tBRUY7SUFFSyxXQUFXLENBQUMsS0FBa0I7O1lBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7aUJBQ2I7Z0JBQ0QsSUFBSSxvQkFDQyxLQUFLLENBQ1Q7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsc0JBQXNDOztZQUN0RCxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7aUJBQzlCO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=