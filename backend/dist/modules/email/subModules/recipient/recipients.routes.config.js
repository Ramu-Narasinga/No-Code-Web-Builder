"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMetaRecipientsRoutes = void 0;
const common_routes_config_1 = require("../../../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../../../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../../../auth/middleware/jwt.middleware"));
const recipient_controller_1 = __importDefault(require("./controllers/recipient.controller"));
class EmailMetaRecipientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "EmailMetaRecipientsRoutes");
    }
    configureRoutes() {
        this.app.put(`/email/meta/recipients`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("emailMetaId").isNumeric(),
            (0, express_validator_1.body)("recipientEmail").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            recipient_controller_1.default.createRecipient,
        ]);
        this.app.delete(`/email/meta/recipients/:id`, [
            jwt_middleware_1.default.validJWTNeeded,
            recipient_controller_1.default.deleteRecipient,
        ]);
        return this.app;
    }
}
exports.EmailMetaRecipientsRoutes = EmailMetaRecipientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9zdWJNb2R1bGVzL3JlY2lwaWVudC9yZWNpcGllbnRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0VBQTBFO0FBRTFFLHVIQUE2RjtBQUM3Rix5REFBeUM7QUFDekMsNkZBQW9FO0FBQ3BFLDhGQUFxRTtBQUVyRSxNQUFhLHlCQUEwQixTQUFRLHlDQUFrQjtJQUMvRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZUFBZTtRQUViLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFO1lBQ3JDLHdCQUFhLENBQUMsY0FBYztZQUM1QixJQUFBLHdCQUFJLEVBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQy9CLElBQUEsd0JBQUksRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNqQyxvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsOEJBQW1CLENBQUMsZUFBZTtTQUNwQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRTtZQUM1Qyx3QkFBYSxDQUFDLGNBQWM7WUFDNUIsOEJBQW1CLENBQUMsZUFBZTtTQUNwQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdEJELDhEQXNCQyJ9