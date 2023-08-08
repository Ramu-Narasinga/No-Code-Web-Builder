"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoastMyResumeRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const rmr_controller_1 = __importDefault(require("./controllers/rmr.controller"));
class RoastMyResumeRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "RoastMyResumeRoutes");
    }
    configureRoutes() {
        this.app.post(`/rmr-upload`, [
            rmr_controller_1.default.roastResume,
        ]);
        return this.app;
    }
}
exports.RoastMyResumeRoutes = RoastMyResumeRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9tb2R1bGVzL3JvYXN0bXlyZXN1bWUvcm1yLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBSXBFLGtGQUF5RDtBQUV6RCxNQUFhLG1CQUFvQixTQUFRLHlDQUFrQjtJQUV6RCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZUFBZTtRQUViLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMzQix3QkFBYSxDQUFDLFdBQVc7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWRELGtEQWNDIn0=