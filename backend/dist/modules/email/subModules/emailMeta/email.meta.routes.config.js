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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwubWV0YS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lbWFpbC9zdWJNb2R1bGVzL2VtYWlsTWV0YS9lbWFpbC5tZXRhLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0VBQTBFO0FBRTFFLHVIQUE2RjtBQUM3Rix5REFBeUM7QUFDekMsNkZBQW9FO0FBQ3BFLGdHQUFzRTtBQUV0RSxNQUFhLGVBQWdCLFNBQVEseUNBQWtCO0lBQ3JELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBRWIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO1lBQzFCLHdCQUFhLENBQUMsY0FBYztZQUM1QixJQUFBLHdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUEsd0JBQUksRUFBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsK0JBQW1CLENBQUMsZUFBZTtTQUNwQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDM0Isd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDL0Isb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLCtCQUFtQixDQUFDLFNBQVM7U0FDOUIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXpCRCwwQ0F5QkMifQ==