"use strict";
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
const s3_helper_service_1 = __importDefault(require("../../common/services/s3.helper.service"));
class VisitorActivityService {
    constructor() {
        (0, dotenv_1.config)();
    }
    getVisitorActivity(getVisitorActivityPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield visitor_activity_dao_1.default.getVisitorActivity(getVisitorActivityPayload);
            }
            catch (err) {
                console.log("Error in visitor activity service", err);
            }
        });
    }
    getVisitorActivityDetails(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("calling dao", fileName);
                return yield visitor_activity_s3_dao_1.default.getActivityEvents(fileName);
            }
            catch (err) {
                console.log("Error in visitor activity service", err);
            }
        });
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
    updateFeedbackActivityComment(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield visitor_activity_dao_1.default.updateFeedbackActivityComment(resource);
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
            // let activityEventsUrl = await VisitorActivityS3Dao.uploadActivityEvents(resource.activityEvents ?? []);
            let activityEventsUrl = yield s3_helper_service_1.default.upload(`${Date.now()}`, JSON.stringify((_a = resource.activityEvents) !== null && _a !== void 0 ? _a : []));
            resource.activityEventsUrl = activityEventsUrl;
            delete resource.activityEvents;
            return resource;
        });
    }
    _getUpdatedVisitorInfoResource(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            // const request = await fetch(new URL(`${process.env.IPINFOURL}`, `${process.env.IPINFOBASE}`));
            // const jsonResponse: any = await request.json();
            // console.log(jsonResponse.ip, jsonResponse.country);
            // resource['ip'] = jsonResponse.ip;
            // resource['city'] = jsonResponse.city;
            // resource['region'] = jsonResponse.region;
            // resource['country'] = jsonResponse.country;
            resource['ip'] = resource.ip;
            resource['city'] = resource.city;
            resource['region'] = resource.region;
            resource['country'] = resource.country;
            return resource;
        });
    }
}
exports.default = new VisitorActivityService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy92aXNpdG9yQWN0aXZpdHkvc2VydmljZXMvdmlzaXRvci5hY3Rpdml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdDO0FBRWhDLHdGQUE4RDtBQUM5RCw4RkFBbUU7QUFFbkUsZ0dBQXNFO0FBRXRFLE1BQU0sc0JBQXNCO0lBRTFCO1FBQ0UsSUFBQSxlQUFNLEdBQUUsQ0FBQztJQUNYLENBQUM7SUFFSyxrQkFBa0IsQ0FBQyx5QkFBNkM7O1lBQ3BFLElBQUk7Z0JBQ0YsT0FBTyxNQUFNLDhCQUFrQixDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDL0U7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZEO1FBQ0gsQ0FBQztLQUFBO0lBRUsseUJBQXlCLENBQUMsUUFBZ0I7O1lBQzlDLElBQUk7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sTUFBTSxpQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvRDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDdkQ7UUFDSCxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxRQUF1Qzs7WUFDbEUsSUFBSTtnQkFFRixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTVELE9BQU8sTUFBTSw4QkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRTtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTthQUNsRDtRQUNILENBQUM7S0FBQTtJQUVLLDZCQUE2QixDQUFDLFFBQXVDOztZQUN6RSxJQUFJO2dCQUNGLE9BQU8sTUFBTSw4QkFBa0IsQ0FBQyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN6RTtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTthQUNsRDtRQUNILENBQUM7S0FBQTtJQUVLLDJCQUEyQixDQUFDLFFBQXVDOztZQUN2RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsa0NBQWtDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVLLGtDQUFrQyxDQUFDLFFBQXVDOzs7WUFDOUUsMEdBQTBHO1lBQzFHLElBQUksaUJBQWlCLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBQSxRQUFRLENBQUMsY0FBYyxtQ0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BILFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztZQUMvQyxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDL0IsT0FBTyxRQUFRLENBQUM7O0tBQ2pCO0lBRUssOEJBQThCLENBQUMsUUFBdUM7O1lBQzFFLGlHQUFpRztZQUNqRyxrREFBa0Q7WUFFbEQsc0RBQXNEO1lBRXRELG9DQUFvQztZQUNwQyx3Q0FBd0M7WUFDeEMsNENBQTRDO1lBQzVDLDhDQUE4QztZQUU5QyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUV2QyxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksc0JBQXNCLEVBQUUsQ0FBQyJ9