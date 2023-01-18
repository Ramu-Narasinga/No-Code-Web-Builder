"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
const email_controller_1 = __importDefault(require("./controllers/email.controller"));
class EmailRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "EmailRoutes");
    }
    configureRoutes() {
        this.app.get('/email/:id', [
            jwt_middleware_1.default.validJWTNeeded,
            email_controller_1.default.getEmailById,
        ]);
        this.app.get('/email', [
            jwt_middleware_1.default.validJWTNeeded,
            email_controller_1.default.getEmails,
        ]);
        this.app.post(`/email`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("title").isString(),
            (0, express_validator_1.body)("description").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            email_controller_1.default.createEmail,
        ]);
        this.app.put(`/email`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("id").isNumeric(),
            (0, express_validator_1.body)("title").exists().isString(),
            (0, express_validator_1.body)("description").exists().isString(),
            (0, express_validator_1.body)("status").exists().isString(),
            (0, express_validator_1.body)("html").exists().isString(),
            (0, express_validator_1.body)("css").exists().isString(),
            (0, express_validator_1.body)("userId").exists().isInt(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            email_controller_1.default.updateEmail,
        ]);
        this.app.delete(`/email/:id`, [
            jwt_middleware_1.default.validJWTNeeded,
            email_controller_1.default.deleteEmail,
        ]);
        return this.app;
    }
}
exports.EmailRoutes = EmailRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZHVsZXMvZW1haWwvZW1haWwucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5RUFBb0U7QUFFcEUsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUN6Qyx1RkFBOEQ7QUFDOUQsc0ZBQTZEO0FBRTdELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDekIsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLDBCQUFlLENBQUMsWUFBWTtTQUM3QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLDBCQUFlLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBQSx3QkFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM5QixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsMEJBQWUsQ0FBQyxXQUFXO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNyQix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUEsd0JBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRTtZQUMvQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsMEJBQWUsQ0FBQyxXQUFXO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM1Qix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsMEJBQWUsQ0FBQyxXQUFXO1NBQzVCLENBQUMsQ0FBQTtRQUVGLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUE3Q0Qsa0NBNkNDIn0=