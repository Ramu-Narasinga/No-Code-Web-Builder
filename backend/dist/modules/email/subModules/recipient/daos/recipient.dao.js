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
        return recipient.recipientEmail.map(re => {
            return {
                emailMetaId: recipient.emailMetaId,
                recipientEmail: re
            };
        });
    }
    createRecipients(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.recipient.createMany({
                    data: this._prepareData(recipient)
                });
            }
            catch (err) {
                console.log("Error in createRecipients", err);
            }
        });
    }
    updateRecipients(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.recipient.updateMany({
                where: {
                    emailMetaId: recipient.emailMetaId
                },
                data: this._prepareData(recipient)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBpZW50LmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZW1haWwvc3ViTW9kdWxlcy9yZWNpcGllbnQvZGFvcy9yZWNpcGllbnQuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0dBQXVFO0FBQ3ZFLGtEQUEwQjtBQU0xQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV6RCxNQUFNLFlBQVk7SUFHaEI7UUFDRSxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUE0QztRQUN2RCxPQUFPLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU87Z0JBQ0wsV0FBVyxFQUFFLFNBQVMsQ0FBQyxXQUFXO2dCQUNsQyxjQUFjLEVBQUUsRUFBRTthQUNuQixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUssZ0JBQWdCLENBQUMsU0FBMEI7O1lBRS9DLElBQUk7Z0JBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztvQkFDNUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2lCQUNuQyxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxTQUEwQjs7WUFFL0MsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztnQkFDNUMsS0FBSyxFQUFFO29CQUNMLFdBQVcsRUFBRSxTQUFTLENBQUMsV0FBVztpQkFDbkM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxPQUFzQjs7WUFDeEMsSUFBSTtnQkFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO29CQUMxQyxLQUFLLEVBQUU7d0JBQ0wsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO3FCQUNqQztpQkFDRixDQUFDLENBQUE7YUFDSDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==