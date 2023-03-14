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
                res.status(200).send({ id: createFeedbackActivityRes.id });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvY29udHJvbGxlcnMvdmlzaXRvci5hY3Rpdml0eS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLG9HQUEwRTtBQUUxRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUV0RSxNQUFNLHlCQUF5QjtJQUV2QixzQkFBc0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RSxJQUFJO2dCQUNGLElBQUkseUJBQXlCLEdBQUcsTUFBTSxrQ0FBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLHlCQUF5QixDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7YUFDMUQ7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtJQUVLLDZCQUE2QixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzdFLElBQUk7Z0JBQ0YsSUFBSSxnQ0FBZ0MsR0FBRyxNQUFNLGtDQUFzQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsZ0NBQWdDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQzthQUNqRTtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDbEUsSUFBSTtnQkFDRixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLElBQUkseUJBQXlCLEdBQUc7b0JBQzlCLE1BQU07aUJBQ1AsQ0FBQTtnQkFDRCxJQUFJLGVBQWUsR0FBRyxNQUFNLGtDQUFzQixDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ2pHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3ZDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFSyx5QkFBeUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RSxJQUFJO2dCQUNGLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDekMsSUFBSSw0QkFBNEIsR0FBRyxNQUFNLGtDQUFzQixDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRyxJQUFJLHNCQUFzQixDQUFDO2dCQUMzQixJQUFJLDRCQUE0QixJQUFJLDRCQUE0QixDQUFDLElBQUk7b0JBQ25FLHNCQUFzQixHQUFHLDRCQUE0QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzlFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDOUM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUkseUJBQXlCLEVBQUUsQ0FBQyJ9