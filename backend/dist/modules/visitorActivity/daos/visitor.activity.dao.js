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
class VisitorActivityDao {
    constructor() {
        log("Created new instance of VisitorActivityDao");
        this.prisma = prisma_service_1.default.getPrismaClient();
    }
    createFeedbackActivity(feedbackActivity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let visitorActivityData = {
                    activityType: feedbackActivity.activityType,
                    ip: feedbackActivity.ip,
                    city: feedbackActivity.city,
                    region: feedbackActivity.region,
                    country: feedbackActivity.country,
                    userId: feedbackActivity.userId,
                    websiteId: feedbackActivity.websiteId,
                    activityEventsUrl: feedbackActivity.activityEventsUrl
                };
                return yield this.prisma.visitorActivity.create({
                    data: Object.assign(Object.assign({}, visitorActivityData), { feedbackActivity: {
                            create: {
                                rating: feedbackActivity.rating,
                                comment: feedbackActivity.comment,
                            }
                        } })
                });
            }
            catch (err) {
                console.log("error in creating feedback in dao", err);
                throw new Error("Create Feedback Activity Error");
            }
        });
    }
}
exports.default = new VisitorActivityDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3Zpc2l0b3JBY3Rpdml0eS9kYW9zL3Zpc2l0b3IuYWN0aXZpdHkuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQWlFO0FBQ2pFLGtEQUEwQjtBQUkxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLGtCQUFrQjtJQUd0QjtRQUNFLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUssc0JBQXNCLENBQUMsZ0JBQStDOztZQUMxRSxJQUFJO2dCQUVGLElBQUksbUJBQW1CLEdBQUc7b0JBQ3hCLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZO29CQUMzQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUk7b0JBQzNCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO29CQUMvQixPQUFPLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztvQkFDakMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU07b0JBQy9CLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTO29CQUNyQyxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxpQkFBaUI7aUJBQ3RELENBQUE7Z0JBRUQsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDOUMsSUFBSSxrQ0FDQyxtQkFBbUIsS0FDdEIsZ0JBQWdCLEVBQUU7NEJBQ2hCLE1BQU0sRUFBRTtnQ0FDTixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsTUFBTTtnQ0FDL0IsT0FBTyxFQUFFLGdCQUFnQixDQUFDLE9BQU87NkJBQ2xDO3lCQUNGLEdBQ0Y7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQyJ9