"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorActivityRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
const visitor_activity_controller_1 = __importDefault(require("./controllers/visitor.activity.controller"));
class VisitorActivityRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "VisitorActivityRoutes");
    }
    configureRoutes() {
        this.app.post(`/feedback-activity`, [
            (0, express_validator_1.body)("activityType").isString(),
            (0, express_validator_1.body)("userId").isInt(),
            (0, express_validator_1.body)("websiteId").isInt(),
            (0, express_validator_1.body)("activityEvents").isArray(),
            (0, express_validator_1.body)("rating").exists().isNumeric(),
            (0, express_validator_1.body)("comment").exists().isString(),
            (0, express_validator_1.body)("ip").isString(),
            (0, express_validator_1.body)("city").isString(),
            (0, express_validator_1.body)("region").isString(),
            (0, express_validator_1.body)("country").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            visitor_activity_controller_1.default.createFeedbackActivity,
        ]);
        this.app.post(`/error-activity`, [
            (0, express_validator_1.body)("activityType").isString(),
            (0, express_validator_1.body)("userId").isInt(),
            (0, express_validator_1.body)("websiteId").isInt(),
            (0, express_validator_1.body)("activityEvents").isArray(),
            (0, express_validator_1.body)("endpoint").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            visitor_activity_controller_1.default.createFeedbackActivity,
        ]);
        this.app.put('/feedback-activity', [
            (0, express_validator_1.body)("id").isNumeric(),
            (0, express_validator_1.body)("comment").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            visitor_activity_controller_1.default.updateFeedbackActivityComment
        ]);
        this.app.get(`/visitor-activity`, [
            jwt_middleware_1.default.validJWTNeeded,
            visitor_activity_controller_1.default.getVisitorActivity,
        ]);
        this.app.get('/visitor-activity/details', [
            jwt_middleware_1.default.validJWTNeeded,
            visitor_activity_controller_1.default.getVisitorActivityDetails
        ]);
        return this.app;
    }
}
exports.VisitorActivityRoutes = VisitorActivityRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvdmlzaXRvci5hY3Rpdml0eS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUVwRSxpSEFBdUY7QUFDdkYseURBQXlDO0FBQ3pDLHVGQUE4RDtBQUM5RCw0R0FBa0Y7QUFFbEYsTUFBYSxxQkFBc0IsU0FBUSx5Q0FBa0I7SUFDM0QsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNsQyxJQUFBLHdCQUFJLEVBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUEsd0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFBLHdCQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFBLHdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUEsd0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUEsd0JBQUksRUFBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDMUIsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHFDQUF5QixDQUFDLHNCQUFzQjtTQUNqRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixJQUFBLHdCQUFJLEVBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUEsd0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFBLHdCQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MscUNBQXlCLENBQUMsc0JBQXNCO1NBQ2pELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO1lBQ2pDLElBQUEsd0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMxQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MscUNBQXlCLENBQUMsNkJBQTZCO1NBQ3hELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFO1lBQ2hDLHdCQUFhLENBQUMsY0FBYztZQUM1QixxQ0FBeUIsQ0FBQyxrQkFBa0I7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUU7WUFDeEMsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLHFDQUF5QixDQUFDLHlCQUF5QjtTQUNwRCxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBbkRELHNEQW1EQyJ9