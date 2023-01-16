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
        this.app.post(`/email`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("title").isString(),
            (0, express_validator_1.body)("description").isString(),
            (0, express_validator_1.body)("status").isString(),
            (0, express_validator_1.body)("html").isString(),
            (0, express_validator_1.body)("css").isString(),
            (0, express_validator_1.body)("userId").isInt(),
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
        return this.app;
    }
}
exports.EmailRoutes = EmailRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZHVsZXMvZW1haWwvZW1haWwucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5RUFBb0U7QUFFcEUsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUN6Qyx1RkFBOEQ7QUFDOUQsc0ZBQTZEO0FBRTdELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBQSx3QkFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN0QixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3RCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBZSxDQUFDLFdBQVc7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3JCLHdCQUFhLENBQUMsY0FBYztZQUM1QixJQUFBLHdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBQSx3QkFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFBQSx3QkFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQy9CLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBZSxDQUFDLFdBQVc7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWxDRCxrQ0FrQ0MifQ==