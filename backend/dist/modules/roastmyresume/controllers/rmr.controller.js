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
const rmr_service_1 = __importDefault(require("../service/rmr.service"));
const log = (0, debug_1.default)("app:rmr-controller");
class RmRController {
    constructor() { }
    roastResume(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.files || !req.files.resume) {
                    return res.status(400).json({ error: "No docx file uploaded." });
                }
                let resumePath = yield rmr_service_1.default.saveResumeToS3(req.files.resume);
                console.info(`[RMR]::[S3-Upload-Success]::${resumePath}`);
                let createRmrUserRes;
                if (resumePath != null) {
                    createRmrUserRes = yield rmr_service_1.default.createRmrUser({
                        resumePath,
                        email: "",
                        newsletterSubscribed: false,
                    });
                    console.info("[RMR]::[User-Create-Success]");
                }
                let feedback = rmr_service_1.default.getFeedback();
                return res.status(200).json(Object.assign({ summary: feedback.content, title: feedback.title }, (createRmrUserRes && { id: createRmrUserRes.id })));
            }
            catch (error) {
                console.error("Error:", error);
                return res.status(500).json({ error: "Internal server error." });
            }
        });
    }
    updateUserRecord(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield rmr_service_1.default.updateRmrUser(Object.assign({}, req.body));
                console.info("[RMR]::[User-Update-Success]");
                return res.status(200).json({ statuus: "ok" });
            }
            catch (error) {
                console.error("Error:", error);
                return res.status(500).json({ error: "Internal server error." });
            }
        });
    }
}
exports.default = new RmRController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3JvYXN0bXlyZXN1bWUvY29udHJvbGxlcnMvcm1yLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIseUVBQWdEO0FBR2hELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXpELE1BQU0sYUFBYTtJQUNqQixnQkFBZSxDQUFDO0lBRVYsV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbkMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7aUJBQ2xFO2dCQUVELElBQUksVUFBVSxHQUFHLE1BQU0scUJBQVUsQ0FBQyxjQUFjLENBQzlDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBaUMsQ0FDNUMsQ0FBQztnQkFDRixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUUxRCxJQUFJLGdCQUFnQixDQUFDO2dCQUVyQixJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7b0JBQ3RCLGdCQUFnQixHQUFHLE1BQU0scUJBQVUsQ0FBQyxhQUFhLENBQUM7d0JBQ2hELFVBQVU7d0JBQ1YsS0FBSyxFQUFFLEVBQUU7d0JBQ1Qsb0JBQW9CLEVBQUUsS0FBSztxQkFDNUIsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztpQkFDOUM7Z0JBRUQsSUFBSSxRQUFRLEdBQXFDLHFCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRTFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLGlCQUN6QixPQUFPLEVBQUcsUUFBUSxDQUFDLE9BQU8sRUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLElBQ2xCLENBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDcEQsQ0FBQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0gsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDaEUsSUFBSTtnQkFFRixNQUFNLHFCQUFVLENBQUMsYUFBYSxtQkFDekIsR0FBRyxDQUFDLElBQUksRUFDWCxDQUFDO2dCQUVILE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFFN0MsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDIn0=