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
class RecipientDao {
    constructor() {
        log("Created new instance of RecipientDao");
        this.prisma = prisma_service_1.default.getPrismaClient();
    }
    _prepareData(recipient) {
        return {
            emailMetaId: recipient.emailMetaId,
            recipientEmail: recipient.recipientEmail
        };
    }
    createRecipient(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.recipient.create({
                    data: Object.assign({}, this._prepareData(recipient))
                });
            }
            catch (err) {
                console.log("Error in createRecipients", err);
            }
        });
    }
    deleteRecipient(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.recipient.delete({
                where: {
                    id: recipient.id
                },
            });
        });
    }
    getRecipients(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.recipient.findMany({
                    where: {
                        emailMetaId: payload.emailMetaId
                    }
                });
            }
            catch (err) {
                console.log("Error in fetching recipients", err);
            }
        });
    }
}
exports.default = new RecipientDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBpZW50LmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvc3ViTW9kdWxlcy9yZWNpcGllbnQvZGFvcy9yZWNpcGllbnQuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0dBQXVFO0FBQ3ZFLGtEQUEwQjtBQU0xQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV6RCxNQUFNLFlBQVk7SUFHaEI7UUFDRSxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUEwQjtRQUNyQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLFNBQVMsQ0FBQyxXQUFXO1lBQ2xDLGNBQWMsRUFBRSxTQUFTLENBQUMsY0FBYztTQUN6QyxDQUFBO0lBQ0gsQ0FBQztJQUVLLGVBQWUsQ0FBQyxTQUEwQjs7WUFFOUMsSUFBSTtnQkFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUN4QyxJQUFJLG9CQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQ2hDO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FBQTtJQUVLLGVBQWUsQ0FBQyxTQUEwQjs7WUFFOUMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDeEMsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRTtpQkFDakI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsT0FBc0I7O1lBQ3hDLElBQUk7Z0JBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztvQkFDMUMsS0FBSyxFQUFFO3dCQUNMLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztxQkFDakM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=