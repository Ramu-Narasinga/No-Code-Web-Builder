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
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("activityType").isString(),
            (0, express_validator_1.body)("userId").isInt(),
            (0, express_validator_1.body)("websiteId").isInt(),
            (0, express_validator_1.body)("activityEvents").isArray(),
            (0, express_validator_1.body)("rating").isNumeric(),
            (0, express_validator_1.body)("comment").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            visitor_activity_controller_1.default.createFeedbackActivity,
        ]);
        return this.app;
    }
}
exports.VisitorActivityRoutes = VisitorActivityRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvdmlzaXRvci5hY3Rpdml0eS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUVwRSxpSEFBdUY7QUFDdkYseURBQXlDO0FBQ3pDLHVGQUE4RDtBQUM5RCw0R0FBa0Y7QUFFbEYsTUFBYSxxQkFBc0IsU0FBUSx5Q0FBa0I7SUFDM0QsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNsQyx3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUEsd0JBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBQSx3QkFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2hDLElBQUEsd0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMxQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MscUNBQXlCLENBQUMsc0JBQXNCO1NBQ2pELENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFyQkQsc0RBcUJDIn0=