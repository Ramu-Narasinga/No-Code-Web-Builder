"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const views_controller_1 = __importDefault(require("./controllers/views.controller"));
class ViewsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "ViewsRoutes");
    }
    configureRoutes() {
        this.app.get(`/api/count/incr/badge.svg`, [
            views_controller_1.default.getViews,
        ]);
        return this.app;
    }
}
exports.ViewsRoutes = ViewsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3Mucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZHVsZXMvdmlld3Mvdmlld3Mucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5RUFBb0U7QUFFcEUsc0ZBQTREO0FBRTVELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUVqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRTtZQUN4QywwQkFBYyxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWRELGtDQWNDIn0=