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
                if (feedbackActivity.id) {
                    return yield this.prisma.visitorActivity.update({
                        where: {
                            id: feedbackActivity.id,
                        },
                        data: Object.assign({}, visitorActivityData),
                    });
                }
                else {
                    return yield this.prisma.visitorActivity.create({
                        data: Object.assign({}, visitorActivityData)
                    });
                }
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
                    activityEventsUrl: true,
                    createdAt: true
                }
            });
        });
    }
}
exports.default = new VisitorActivityDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3Zpc2l0b3JBY3Rpdml0eS9kYW9zL3Zpc2l0b3IuYWN0aXZpdHkuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQWlFO0FBQ2pFLGtEQUEwQjtBQUkxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLGtCQUFrQjtJQUd0QjtRQUNFLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUssc0JBQXNCLENBQUMsZ0JBQStDOztZQUMxRSxJQUFJO2dCQUVGLElBQUksbUJBQW1CLEdBQVE7b0JBQzdCLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZO29CQUMzQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUk7b0JBQzNCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO29CQUMvQixPQUFPLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztvQkFDakMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtvQkFDaEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsU0FBUztvQkFDdEMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsaUJBQWlCO2lCQUN0RCxDQUFBO2dCQUVELElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29CQUMvQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO3dCQUN4QyxNQUFNLEVBQUU7NEJBQ04sTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU07NEJBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO3lCQUNsQztxQkFDRixDQUFBO2lCQUNGO3FCQUFNO29CQUNMLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxHQUFHO3dCQUNyQyxNQUFNLEVBQUU7NEJBQ04sUUFBUSxFQUFFLGdCQUFnQixDQUFDLFFBQVE7eUJBQ3BDO3FCQUNGLENBQUE7aUJBQ0Y7Z0JBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7d0JBQzlDLEtBQUssRUFBRTs0QkFDTCxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTt5QkFDeEI7d0JBQ0QsSUFBSSxvQkFDQyxtQkFBbUIsQ0FDdkI7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7d0JBQzlDLElBQUksb0JBQ0MsbUJBQW1CLENBQ3ZCO3FCQUNGLENBQUMsQ0FBQztpQkFDSjthQUNGO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQztLQUFBO0lBRUssNkJBQTZCLENBQUMsZ0JBQWdEOztZQUNsRixPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBQy9DLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtpQkFDeEI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2lCQUNsQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLElBQXNCOztZQUM3QyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUNoRCxLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixLQUFLLEVBQUUsSUFBSTs0QkFDWCxFQUFFLEVBQUUsSUFBSTt5QkFDVDtxQkFDRjtvQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixhQUFhLEVBQUUsSUFBSTtvQkFDbkIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRSxFQUFFLElBQUk7b0JBQ1IsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLE1BQU0sRUFBRSxJQUFJO29CQUNaLE9BQU8sRUFBRSxJQUFJO29CQUNiLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIn0=