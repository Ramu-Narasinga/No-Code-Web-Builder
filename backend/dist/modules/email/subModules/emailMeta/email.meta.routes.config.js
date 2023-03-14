"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMetaRoutes = void 0;
const common_routes_config_1 = require("../../../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../../../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../../../auth/middleware/jwt.middleware"));
const email_meta_controller_1 = __importDefault(require("./controllers/email.meta.controller"));
class EmailMetaRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "EmailMetaRoutes");
    }
    configureRoutes() {
        this.app.put(`/email/meta`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("id").isNumeric(),
            (0, express_validator_1.body)("fromName").exists().isString(),
            (0, express_validator_1.body)("subject").exists().isString(),
            (0, express_validator_1.body)("emailId").isNumeric(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            email_meta_controller_1.default.updateEmailMeta,
        ]);
        this.app.post(`/email/send`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("emailMetaId").isNumeric(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            email_meta_controller_1.default.sendEmail,
        ]);
        return this.app;
    }
}
exports.EmailMetaRoutes = EmailMetaRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwubWV0YS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9zdWJNb2R1bGVzL2VtYWlsTWV0YS9lbWFpbC5tZXRhLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0VBQTBFO0FBRTFFLHVIQUE2RjtBQUM3Rix5REFBeUM7QUFDekMsNkZBQW9FO0FBQ3BFLGdHQUFzRTtBQUV0RSxNQUFhLGVBQWdCLFNBQVEseUNBQWtCO0lBQ3JELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBRWIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO1lBQzFCLHdCQUFhLENBQUMsY0FBYztZQUM1QixJQUFBLHdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFBLHdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQzNCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywrQkFBbUIsQ0FBQyxlQUFlO1NBQ3BDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMzQix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMvQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsK0JBQW1CLENBQUMsU0FBUztTQUM5QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBMUJELDBDQTBCQyJ9