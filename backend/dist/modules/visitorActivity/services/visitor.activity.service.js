"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const visitor_activity_dao_1 = __importDefault(require("../daos/visitor.activity.dao"));
const visitor_activity_s3_dao_1 = __importDefault(require("../daos/visitor.activity.s3.dao"));
class VisitorActivityService {
    constructor() {
        this.fetch = (url, init) => Promise.resolve().then(() => __importStar(require("node-fetch"))).then(({ default: fetch }) => fetch(url, init));
        (0, dotenv_1.config)();
    }
    createFeedbackActivity(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                resource = yield this._getUpdatedActivityResource(resource);
                return yield visitor_activity_dao_1.default.createFeedbackActivity(resource);
            }
            catch (err) {
                console.log("Error in visitor activity service", err);
                throw new Error("Create Feedback Activity Error");
            }
        });
    }
    _getUpdatedActivityResource(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            resource = yield this.uploadEventsToS3AndReturnEventsUrl(resource);
            resource = yield this._getUpdatedVisitorInfoResource(resource);
            return resource;
        });
    }
    uploadEventsToS3AndReturnEventsUrl(resource) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let activityEventsUrl = yield visitor_activity_s3_dao_1.default.uploadActivityEvents((_a = resource.activityEvents) !== null && _a !== void 0 ? _a : []);
            resource.activityEventsUrl = activityEventsUrl;
            delete resource.activityEvents;
            return resource;
        });
    }
    _getUpdatedVisitorInfoResource(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.fetch(`${process.env.IPINFO}`);
            const jsonResponse = yield request.json();
            console.log(jsonResponse.ip, jsonResponse.country);
            resource['ip'] = jsonResponse.ip;
            resource['city'] = jsonResponse.city;
            resource['region'] = jsonResponse.region;
            resource['country'] = jsonResponse.country;
            return resource;
        });
    }
}
exports.default = new VisitorActivityService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvc2VydmljZXMvdmlzaXRvci5hY3Rpdml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0M7QUFHaEMsd0ZBQThEO0FBQzlELDhGQUFtRTtBQUduRSxNQUFNLHNCQUFzQjtJQUUxQjtRQUlBLFVBQUssR0FBRyxDQUFDLEdBQWdCLEVBQUUsSUFBa0IsRUFBRSxFQUFFLENBQUUsa0RBQU8sWUFBWSxJQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFIckgsSUFBQSxlQUFNLEdBQUUsQ0FBQztJQUNYLENBQUM7SUFJSyxzQkFBc0IsQ0FBQyxRQUF1Qzs7WUFDbEUsSUFBSTtnQkFFRixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTVELE9BQU8sTUFBTSw4QkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRTtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTthQUNsRDtRQUNILENBQUM7S0FBQTtJQUVLLDJCQUEyQixDQUFDLFFBQXVDOztZQUN2RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsa0NBQWtDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVLLGtDQUFrQyxDQUFDLFFBQXVDOzs7WUFDOUUsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLGlDQUFvQixDQUFDLG9CQUFvQixDQUFDLE1BQUEsUUFBUSxDQUFDLGNBQWMsbUNBQUksRUFBRSxDQUFDLENBQUM7WUFDdkcsUUFBUSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1lBQy9DLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUMvQixPQUFPLFFBQVEsQ0FBQzs7S0FDakI7SUFFSyw4QkFBOEIsQ0FBQyxRQUF1Qzs7WUFDMUUsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzFELE1BQU0sWUFBWSxHQUFRLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDekMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFFM0MsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMifQ==