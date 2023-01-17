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
const debug_1 = __importDefault(require("debug"));
const website_service_1 = __importDefault(require("../services/website.service"));
const log = (0, debug_1.default)("app:website-controller");
class WebsiteController {
    getWebsites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = res.locals.jwt.userId;
                console.log("userId:", userId);
                let getWebsitesPayload = {
                    userId
                };
                let websites = yield website_service_1.default.getWebsites(getWebsitesPayload);
                res.status(200).send(websites);
            }
            catch (err) {
                log("create website error: %O", err);
                return res.status(500).send();
            }
        });
    }
    createWebsite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("res.locals.jwt:", res.locals.jwt);
                let userId = res.locals.jwt.userId;
                let createWebsitePayload = Object.assign(Object.assign({}, req.body), { userId });
                log(yield website_service_1.default.createWebsite(createWebsitePayload));
                res.status(200).send();
            }
            catch (err) {
                log("create website error: %O", err);
                return res.status(500).send();
            }
        });
    }
    updateWebsite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield website_service_1.default.updateWebsite(req.body));
                res.status(200).send();
            }
            catch (err) {
                log("update website error: %O", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new WebsiteController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy93ZWJzaXRlL2NvbnRyb2xsZXJzL3dlYnNpdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixrRkFBeUQ7QUFFekQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxpQkFBaUI7SUFFZixXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsSUFBSTtnQkFDRixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixJQUFJLGtCQUFrQixHQUFHO29CQUN2QixNQUFNO2lCQUNQLENBQUE7Z0JBQ0QsSUFBSSxRQUFRLEdBQUcsTUFBTSx5QkFBYyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNoQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzdELElBQUk7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLElBQUksb0JBQW9CLG1DQUNuQixHQUFHLENBQUMsSUFBSSxLQUNYLE1BQU0sR0FDUCxDQUFBO2dCQUNELEdBQUcsQ0FBQyxNQUFNLHlCQUFjLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDOUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzdELElBQUk7Z0JBQ0YsR0FBRyxDQUFDLE1BQU0seUJBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=