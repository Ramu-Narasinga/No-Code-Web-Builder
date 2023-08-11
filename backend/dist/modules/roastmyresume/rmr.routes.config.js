"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoastMyResumeRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const rmr_controller_1 = __importDefault(require("./controllers/rmr.controller"));
class RoastMyResumeRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "RoastMyResumeRoutes");
    }
    configureRoutes() {
        this.app.post(`/rmr-upload`, [
            rmr_controller_1.default.roastResume,
        ]);
        this.app.put(`/rmr-upload`, [
            (0, express_validator_1.body)("id").isNumeric(),
            (0, express_validator_1.body)("email").isEmail(),
            (0, express_validator_1.body)("name").isString(),
            (0, express_validator_1.body)("newsletterSubscribed").isBoolean(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            rmr_controller_1.default.updateUserRecord,
        ]);
        return this.app;
    }
}
exports.RoastMyResumeRoutes = RoastMyResumeRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9tb2R1bGVzL3JvYXN0bXlyZXN1bWUvcm1yLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLGlIQUF1RjtBQUN2Rix5REFBeUM7QUFDekMsa0ZBQXlEO0FBRXpELE1BQWEsbUJBQW9CLFNBQVEseUNBQWtCO0lBRXpELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxlQUFlO1FBRWIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzNCLHdCQUFhLENBQUMsV0FBVztTQUMxQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUU7WUFDMUIsSUFBQSx3QkFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ3hDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyx3QkFBYSxDQUFDLGdCQUFnQjtTQUMvQixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdkJELGtEQXVCQyJ9