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
const debug_1 = __importDefault(require("debug"));
const visitor_activity_service_1 = __importDefault(require("../services/visitor.activity.service"));
const log = (0, debug_1.default)("app:visitor.activity-controller");
class VisitorActivityController {
    createFeedbackActivity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let createFeedbackActivityRes = yield visitor_activity_service_1.default.createFeedbackActivity(req.body);
                res.status(200).send({ id: createFeedbackActivityRes.id, activityEventsUrl: createFeedbackActivityRes.activityEventsUrl });
            }
            catch (err) {
                log("Create Feedback Activity Error %0:", err);
                return res.status(500).send();
            }
        });
    }
    updateActivity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield visitor_activity_service_1.default.updateActivity(req.body);
                res.status(200).send({ status: "ok" });
            }
            catch (err) {
                log("Create Feedback Activity Error %0:", err);
                return res.status(500).send();
            }
        });
    }
    updateFeedbackActivityComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updateFeedbackActivityCommentRes = yield visitor_activity_service_1.default.updateFeedbackActivityComment(req.body);
                res.status(200).send({ id: updateFeedbackActivityCommentRes.id });
            }
            catch (err) {
                log("Create Feedback Activity Error %0:", err);
                return res.status(500).send();
            }
        });
    }
    getVisitorActivity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = res.locals.jwt.userId;
                let getVisitorActivityPayload = {
                    userId
                };
                let visitorActivity = yield visitor_activity_service_1.default.getVisitorActivity(getVisitorActivityPayload);
                res.status(200).send(visitorActivity);
            }
            catch (err) {
                log("Create Feedback Activity Error %0:", err);
                return res.status(500).send();
            }
        });
    }
    getVisitorActivityDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let fileName = req.query.fileName;
                console.log("inside filename", fileName);
                let visitorActivityDetailsBuffer = yield visitor_activity_service_1.default.getVisitorActivityDetails(fileName);
                let visitorActivityDetails;
                if (visitorActivityDetailsBuffer && visitorActivityDetailsBuffer.Body)
                    visitorActivityDetails = visitorActivityDetailsBuffer.Body.toString('utf-8');
                res.status(200).send(visitorActivityDetails);
            }
            catch (err) {
                console.log("Error in controller", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new VisitorActivityController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvY29udHJvbGxlcnMvdmlzaXRvci5hY3Rpdml0eS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLG9HQUEwRTtBQUUxRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUV0RSxNQUFNLHlCQUF5QjtJQUV2QixzQkFBc0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RSxJQUFJO2dCQUNGLElBQUkseUJBQXlCLEdBQUcsTUFBTSxrQ0FBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUM7YUFDMUg7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM5RCxJQUFJO2dCQUNGLE1BQU0sa0NBQXNCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUN0QztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0lBRUssNkJBQTZCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDN0UsSUFBSTtnQkFDRixJQUFJLGdDQUFnQyxHQUFHLE1BQU0sa0NBQXNCLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxnQ0FBZ0MsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO2FBQ2pFO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNsRSxJQUFJO2dCQUNGLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsSUFBSSx5QkFBeUIsR0FBRztvQkFDOUIsTUFBTTtpQkFDUCxDQUFBO2dCQUNELElBQUksZUFBZSxHQUFHLE1BQU0sa0NBQXNCLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDakcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdkM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLHlCQUF5QixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pFLElBQUk7Z0JBQ0YsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLDRCQUE0QixHQUFHLE1BQU0sa0NBQXNCLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BHLElBQUksc0JBQXNCLENBQUM7Z0JBQzNCLElBQUksNEJBQTRCLElBQUksNEJBQTRCLENBQUMsSUFBSTtvQkFDbkUsc0JBQXNCLEdBQUcsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDOUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUM5QztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSx5QkFBeUIsRUFBRSxDQUFDIn0=