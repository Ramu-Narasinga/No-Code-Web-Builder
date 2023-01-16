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
                log(yield visitor_activity_service_1.default.createFeedbackActivity(req.body));
                res.status(200).send();
            }
            catch (err) {
                log("Create Feedback Activity Error %0:", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new VisitorActivityController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvY29udHJvbGxlcnMvdmlzaXRvci5hY3Rpdml0eS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLG9HQUEwRTtBQUUxRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUV0RSxNQUFNLHlCQUF5QjtJQUV2QixzQkFBc0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RSxJQUFJO2dCQUVGLEdBQUcsQ0FBQyxNQUFNLGtDQUFzQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUkseUJBQXlCLEVBQUUsQ0FBQyJ9