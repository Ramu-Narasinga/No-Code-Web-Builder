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
const views_service_1 = __importDefault(require("../service/views.service"));
const log = (0, debug_1.default)("app:rmr-controller");
class RmRController {
    constructor() { }
    getViews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Update SVG with the provided count
            let updatedSvg = views_service_1.default.updateSvgWithCount(0);
            try {
                const url = (req.query.url ? req.query.url : "");
                const count = yield views_service_1.default.incrViewsCount(url);
                // Update SVG with the provided count
                updatedSvg = views_service_1.default.updateSvgWithCount(count);
            }
            catch (err) {
                console.error("Error incrementing visitor count:", err);
            }
            // Set the response Content-Type to "image/svg+xml" for SVG content
            res.set("Content-Type", "image/svg+xml");
            // Send the updated SVG as the response
            res.send(updatedSvg);
        });
    }
}
exports.default = new RmRController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvdmlld3MvY29udHJvbGxlcnMvdmlld3MuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQiw2RUFBb0Q7QUFFcEQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFekQsTUFBTSxhQUFhO0lBQ2pCLGdCQUFlLENBQUM7SUFFVixRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQscUNBQXFDO1lBQ3JDLElBQUksVUFBVSxHQUFHLHVCQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSTtnQkFDRixNQUFNLEdBQUcsR0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUM7Z0JBQ25FLE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JELHFDQUFxQztnQkFDckMsVUFBVSxHQUFHLHVCQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckQ7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsbUVBQW1FO1lBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3pDLHVDQUF1QztZQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9