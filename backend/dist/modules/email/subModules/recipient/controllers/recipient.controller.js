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
const recipient_service_1 = __importDefault(require("../services/recipient.service"));
const log = (0, debug_1.default)("app:recipient-controller");
class RecipientController {
    createRecipient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("inside createREcipients APi contoller", req.body);
                log(yield recipient_service_1.default.createRecipient(req.body));
                res.status(200).send();
            }
            catch (err) {
                log("create recipient error: %O", err);
                return res.status(500).send();
            }
        });
    }
    deleteRecipient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield recipient_service_1.default.deleteRecipient({ id: +req.params.id }));
                res.status(200).send();
            }
            catch (err) {
                log("delete recipient error: %O", err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new RecipientController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBpZW50LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VtYWlsL3N1Yk1vZHVsZXMvcmVjaXBpZW50L2NvbnRyb2xsZXJzL3JlY2lwaWVudC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLHNGQUE2RDtBQUU3RCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUUvRCxNQUFNLG1CQUFtQjtJQUVqQixlQUFlLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDL0QsSUFBSTtnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0QsR0FBRyxDQUFDLE1BQU0sMkJBQWdCLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDL0QsSUFBSTtnQkFDRixHQUFHLENBQUMsTUFBTSwyQkFBZ0IsQ0FBQyxlQUFlLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLG1CQUFtQixFQUFFLENBQUMifQ==