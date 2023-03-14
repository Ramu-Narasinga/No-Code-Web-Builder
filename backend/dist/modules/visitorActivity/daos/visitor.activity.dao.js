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
                    userId: +feedbackActivity.userId,
                    websiteId: +feedbackActivity.websiteId,
                    activityEventsUrl: feedbackActivity.activityEventsUrl
                };
                if (feedbackActivity && feedbackActivity.rating) {
                    visitorActivityData["feedbackActivity"] = {
                        create: {
                            rating: feedbackActivity.rating,
                            comment: feedbackActivity.comment,
                        }
                    };
                }
                else {
                    visitorActivityData["errorActivity"] = {
                        create: {
                            endpoint: feedbackActivity.endpoint
                        }
                    };
                }
                return yield this.prisma.visitorActivity.create({
                    data: Object.assign({}, visitorActivityData)
                });
            }
            catch (err) {
                console.log("error in creating feedback in dao", err);
                throw new Error("Create Feedback Activity Error");
            }
        });
    }
    updateFeedbackActivityComment(feedbackActivity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.feedbackActivity.update({
                where: {
                    id: feedbackActivity.id,
                },
                data: {
                    comment: feedbackActivity.comment,
                },
            });
        });
    }
    getVisitorActivity(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.visitorActivity.findMany({
                where: {
                    userId: data.userId
                },
                select: {
                    website: {
                        select: {
                            title: true,
                            id: true
                        }
                    },
                    feedbackActivity: true,
                    errorActivity: true,
                    city: true,
                    id: true,
                    activityType: true,
                    region: true,
                    country: true,
                    activityEventsUrl: true
                }
            });
        });
    }
}
exports.default = new VisitorActivityDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3Zpc2l0b3JBY3Rpdml0eS9kYW9zL3Zpc2l0b3IuYWN0aXZpdHkuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQWlFO0FBQ2pFLGtEQUEwQjtBQUkxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLGtCQUFrQjtJQUd0QjtRQUNFLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUssc0JBQXNCLENBQUMsZ0JBQStDOztZQUMxRSxJQUFJO2dCQUVGLElBQUksbUJBQW1CLEdBQVE7b0JBQzdCLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZO29CQUMzQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUk7b0JBQzNCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO29CQUMvQixPQUFPLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztvQkFDakMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtvQkFDaEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsU0FBUztvQkFDdEMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsaUJBQWlCO2lCQUN0RCxDQUFBO2dCQUVELElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29CQUMvQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO3dCQUN4QyxNQUFNLEVBQUU7NEJBQ04sTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU07NEJBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO3lCQUNsQztxQkFDRixDQUFBO2lCQUNGO3FCQUFNO29CQUNMLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxHQUFHO3dCQUNyQyxNQUFNLEVBQUU7NEJBQ04sUUFBUSxFQUFFLGdCQUFnQixDQUFDLFFBQVE7eUJBQ3BDO3FCQUNGLENBQUE7aUJBQ0Y7Z0JBRUQsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDOUMsSUFBSSxvQkFDQyxtQkFBbUIsQ0FDdkI7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxnQkFBZ0Q7O1lBQ2xGLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFDL0MsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO2lCQUN4QjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGdCQUFnQixDQUFDLE9BQU87aUJBQ2xDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsSUFBc0I7O1lBQzdDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hELEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ3BCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFOzRCQUNOLEtBQUssRUFBRSxJQUFJOzRCQUNYLEVBQUUsRUFBRSxJQUFJO3lCQUNUO3FCQUNGO29CQUNELGdCQUFnQixFQUFFLElBQUk7b0JBQ3RCLGFBQWEsRUFBRSxJQUFJO29CQUNuQixJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsSUFBSTtvQkFDUixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsTUFBTSxFQUFFLElBQUk7b0JBQ1osT0FBTyxFQUFFLElBQUk7b0JBQ2IsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEI7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQyJ9