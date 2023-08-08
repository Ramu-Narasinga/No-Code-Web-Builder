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
const dotenv_1 = __importDefault(require("dotenv"));
const rmr_service_1 = __importDefault(require("../service/rmr.service"));
const log = (0, debug_1.default)("app:rmr-controller");
class RmRController {
    constructor() {
        dotenv_1.default.config();
    }
    roastResume(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.files || !req.files.resume) {
                    return res.status(400).json({ error: "No docx file uploaded." });
                }
                let resumePath = yield rmr_service_1.default.saveResumeToS3(req.files.resume);
                if (resumePath != null) {
                    yield rmr_service_1.default.createRmrUser({
                        resumePath,
                        email: '',
                        newsletterSubsribed: false
                    });
                }
                return res.status(200).json({ summary: rmr_service_1.default.getFeedback(req.files.resume) });
            }
            catch (error) {
                console.error("Error:", error);
                return res.status(500).json({ error: "Internal server error." });
            }
        });
    }
}
exports.default = new RmRController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3JvYXN0bXlyZXN1bWUvY29udHJvbGxlcnMvcm1yLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsb0RBQTRCO0FBQzVCLHlFQUFnRDtBQUdoRCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV6RCxNQUFNLGFBQWE7SUFDakI7UUFDRSxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsSUFBSTtnQkFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNuQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQztpQkFDbEU7Z0JBRUQsSUFBSSxVQUFVLEdBQUcsTUFBTSxxQkFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQWlDLENBQUMsQ0FBQztnQkFFOUYsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO29CQUN0QixNQUFNLHFCQUFVLENBQUMsYUFBYSxDQUFDO3dCQUM3QixVQUFVO3dCQUNWLEtBQUssRUFBRSxFQUFFO3dCQUNULG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBaUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUM5RztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQzthQUNsRTtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9