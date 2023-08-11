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
        // this.app.put('/feedback-activity', [
        //   body("id").isNumeric(),
        //   body("comment").isString(),
        //   BodyValidationMiddleware.verifyBodyFieldsErrors,
        //   visitorActivityController.updateFeedbackActivityComment
        // ]);
        this.app.put('/feedback-activity', [
            (0, express_validator_1.body)("activityEvents").isArray(),
            (0, express_validator_1.body)("activityEventsUrl").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            visitor_activity_controller_1.default.updateActivity
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvdmlzaXRvci5hY3Rpdml0eS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUVwRSxpSEFBdUY7QUFDdkYseURBQXlDO0FBQ3pDLHVGQUE4RDtBQUM5RCw0R0FBa0Y7QUFFbEYsTUFBYSxxQkFBc0IsU0FBUSx5Q0FBa0I7SUFDM0QsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNsQyxJQUFBLHdCQUFJLEVBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUEsd0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFBLHdCQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFBLHdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUEsd0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUEsd0JBQUksRUFBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDMUIsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHFDQUF5QixDQUFDLHNCQUFzQjtTQUNqRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixJQUFBLHdCQUFJLEVBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUEsd0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFBLHdCQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MscUNBQXlCLENBQUMsc0JBQXNCO1NBQ2pELENBQUMsQ0FBQztRQUVILHVDQUF1QztRQUN2Qyw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLHFEQUFxRDtRQUNyRCw0REFBNEQ7UUFDNUQsTUFBTTtRQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO1lBQ2pDLElBQUEsd0JBQUksRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNoQyxJQUFBLHdCQUFJLEVBQUMsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDcEMsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHFDQUF5QixDQUFDLGNBQWM7U0FDekMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUU7WUFDaEMsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLHFDQUF5QixDQUFDLGtCQUFrQjtTQUM3QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRTtZQUN4Qyx3QkFBYSxDQUFDLGNBQWM7WUFDNUIscUNBQXlCLENBQUMseUJBQXlCO1NBQ3BELENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUExREQsc0RBMERDIn0=