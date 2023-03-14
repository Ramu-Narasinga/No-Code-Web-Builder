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
    getWebsiteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let getWebsiteByIdPayload = {
                    id: +req.params.id
                };
                let website = yield website_service_1.default.getWebsiteById(getWebsiteByIdPayload);
                res.status(200).send(website);
            }
            catch (err) {
                log("create website error: %O", err);
                return res.status(500).send();
            }
        });
    }
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
                let userId = res.locals.jwt.userId;
                let createWebsitePayload = Object.assign(Object.assign({}, req.body), { userId });
                let createWebsiteRes = yield website_service_1.default.createWebsite(createWebsitePayload);
                res.status(200).send({ website: createWebsiteRes });
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
                let updateWebsiteRes = yield website_service_1.default.updateWebsite(req.body);
                res.status(200).send(updateWebsiteRes);
            }
            catch (err) {
                log("update website error: %O", err);
                return res.status(500).send();
            }
        });
    }
    updateWebsiteBuilder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updateWebsiteBuilderPayload = Object.assign(Object.assign({}, req.body), { id: +req.params.id });
                let updateWebsiteRes = yield website_service_1.default.updateWebsite(updateWebsiteBuilderPayload);
                res.status(200).send(updateWebsiteRes);
            }
            catch (err) {
                log("update website error: %O", err);
                return res.status(500).send();
            }
        });
    }
    deleteWebsite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let deleteWebsiteByIdPayload = {
                    id: +req.params.id
                };
                let deleteWebsiteRes = yield website_service_1.default.deleteWebsite(deleteWebsiteByIdPayload);
                res.status(200).send(deleteWebsiteRes);
            }
            catch (err) {
                log("update website error: %O", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new WebsiteController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy93ZWJzaXRlL2NvbnRyb2xsZXJzL3dlYnNpdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixrRkFBeUQ7QUFFekQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxpQkFBaUI7SUFFZixjQUFjLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDOUQsSUFBSTtnQkFDRixJQUFJLHFCQUFxQixHQUFHO29CQUMxQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7aUJBQ25CLENBQUE7Z0JBQ0QsSUFBSSxPQUFPLEdBQUcsTUFBTSx5QkFBYyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELElBQUk7Z0JBQ0YsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxrQkFBa0IsR0FBRztvQkFDdkIsTUFBTTtpQkFDUCxDQUFBO2dCQUNELElBQUksUUFBUSxH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