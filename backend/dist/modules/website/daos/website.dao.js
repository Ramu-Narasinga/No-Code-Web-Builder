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
const prisma_service_1 = __importDefault(require("../../common/services/prisma.service"));
const debug_1 = __importDefault(require("debug"));
const create_email_dto_1 = require("../../email/dto/create.email.dto");
const dotenv_1 = require("dotenv");
const log = (0, debug_1.default)("app:in-memory-dao");
class WebsiteDao {
    constructor() {
        log("Created new instance of WebsiteDao");
        this.prisma = prisma_service_1.default.getPrismaClient();
        (0, dotenv_1.config)();
    }
    getWebsiteById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = payload;
                console.log("payload before getwebsites command", payload);
                return yield this.prisma.website.findUnique({
                    where: {
                        id
                    }
                });
            }
            catch (err) {
                console.log("found err:", err);
                throw new Error('Errro encountered in fetching email by id');
            }
        });
    }
    getWebsites(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { userId } = payload;
                console.log("payload before getwebsites command", payload);
                return yield this.prisma.website.findMany({
                    where: {
                        userId: {
                            equals: userId
                        }
                    }
                });
            }
            catch (err) {
                console.log("found err:", err);
                throw new Error('Errro encountered in fetching websites');
            }
        });
    }
    createWebsite(website) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = Object.assign(Object.assign({}, website), { status: create_email_dto_1.Status.DRAFT, html: (_a = process.env.websiteDefaultTemplateHtml) !== null && _a !== void 0 ? _a : '', css: (_b = process.env.websiteDefaultTemplateCss) !== null && _b !== void 0 ? _b : '' });
                console.log("data before create command");
                return yield this.prisma.website.create({
                    data
                });
            }
            catch (err) {
                console.log("found err:", err);
                throw new Error('Errro encountered in creating website');
            }
        });
    }
    updateWebsite(website) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.website.update({
                where: {
                    id: website.id
                },
                data: Object.assign({}, website),
            });
        });
    }
}
exports.default = new WebsiteDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3dlYnNpdGUvZGFvcy93ZWJzaXRlLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFJMUIsdUVBQTBEO0FBQzFELG1DQUFnQztBQUVoQyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN4RCxNQUFNLFVBQVU7SUFHZDtRQUNFLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM5QyxJQUFBLGVBQU0sR0FBRSxDQUFDO0lBQ1gsQ0FBQztJQUVLLGNBQWMsQ0FBQyxPQUFzQjs7WUFDekMsSUFBSTtnQkFDRixJQUFJLEVBQ0YsRUFBRSxFQUNILEdBQUcsT0FBTyxDQUFDO2dCQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRTNELE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQzFDLEtBQUssRUFBRTt3QkFDTCxFQUFFO3FCQUNIO2lCQUNGLENBQUMsQ0FBQTthQUNIO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQzthQUM5RDtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxPQUF1Qjs7WUFDdkMsSUFBSTtnQkFDRixJQUFJLEVBQ0YsTUFBTSxFQUNQLEdBQUcsT0FBTyxDQUFDO2dCQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRTNELE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ3hDLEtBQUssRUFBRTt3QkFDTCxNQUFNLEVBQUc7NEJBQ1AsTUFBTSxFQUFFLE1BQU07eUJBQ2Y7cUJBQ0Y7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2FBQzNEO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLE9BQXlCOzs7WUFDM0MsSUFBSTtnQkFDRixJQUFJLElBQUksbUNBQ0gsT0FBTyxLQUNWLE1BQU0sRUFBRSx5QkFBTSxDQUFDLEtBQUssRUFDcEIsSUFBSSxFQUFFLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsbUNBQUksRUFBRSxFQUNsRCxHQUFHLEVBQUUsTUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixtQ0FBSSxFQUFFLEdBQ2pELENBQUE7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN0QyxJQUFJO2lCQUNMLENBQUMsQ0FBQTthQUNIO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzthQUMxRDs7S0FDRjtJQUVLLGFBQWEsQ0FBQyxPQUF5Qjs7WUFDM0MsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDdEMsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtpQkFDZjtnQkFDRCxJQUFJLG9CQUNDLE9BQU8sQ0FDWDthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyJ9