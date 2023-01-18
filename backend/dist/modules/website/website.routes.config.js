"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
const website_controller_1 = __importDefault(require("./controllers/website.controller"));
class WebsiteRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "WebsiteRoutes");
    }
    configureRoutes() {
        this.app.get('/website/:id', [
            jwt_middleware_1.default.validJWTNeeded,
            website_controller_1.default.getWebsiteById,
        ]);
        this.app.get('/website', [
            jwt_middleware_1.default.validJWTNeeded,
            website_controller_1.default.getWebsites,
        ]);
        this.app.post(`/website`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("title").isString(),
            (0, express_validator_1.body)("description").isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            website_controller_1.default.createWebsite,
        ]);
        this.app.put(`/website`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)("id").isNumeric(),
            (0, express_validator_1.body)("title").exists().isString(),
            (0, express_validator_1.body)("description").exists().isString(),
            (0, express_validator_1.body)("status").exists().isString(),
            (0, express_validator_1.body)("html").exists().isString(),
            (0, express_validator_1.body)("css").exists().isString(),
            (0, express_validator_1.body)("userId").exists().isInt(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            website_controller_1.default.updateWebsite,
        ]);
        return this.app;
    }
}
exports.WebsiteRoutes = WebsiteRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbW9kdWxlcy93ZWJzaXRlL3dlYnNpdGUucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5RUFBb0U7QUFFcEUsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUN6Qyx1RkFBOEQ7QUFDOUQsMEZBQWlFO0FBRWpFLE1BQWEsYUFBYyxTQUFRLHlDQUFrQjtJQUNuRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFDM0Isd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLDRCQUFpQixDQUFDLGNBQWM7U0FDakMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLHdCQUFhLENBQUMsY0FBYztZQUM1Qiw0QkFBaUIsQ0FBQyxXQUFXO1NBQzlCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN4Qix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFBLHdCQUFJLEVBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQzlCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyw0QkFBaUIsQ0FBQyxhQUFhO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUN2Qix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUEsd0JBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRTtZQUMvQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsNEJBQWlCLENBQUMsYUFBYTtTQUNoQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBeENELHNDQXdDQyJ9