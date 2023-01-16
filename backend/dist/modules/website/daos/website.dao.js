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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3dlYnNpdGUvZGFvcy93ZWJzaXRlLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFHMUIsdUVBQTBEO0FBQzFELG1DQUFnQztBQUVoQyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFVBQVU7SUFHZDtRQUNFLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM5QyxJQUFBLGVBQU0sR0FBRSxDQUFDO0lBQ1gsQ0FBQztJQUVLLGFBQWEsQ0FBQyxPQUF5Qjs7O1lBQzNDLElBQUk7Z0JBQ0YsSUFBSSxJQUFJLG1DQUNILE9BQU8sS0FDVixNQUFNLEVBQUUseUJBQU0sQ0FBQyxLQUFLLEVBQ3BCLElBQUksRUFBRSxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLG1DQUFJLEVBQUUsRUFDbEQsR0FBRyxFQUFFLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsbUNBQUksRUFBRSxHQUNqRCxDQUFBO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsSUFBSTtpQkFDTCxDQUFDLENBQUE7YUFDSDtZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7YUFDMUQ7O0tBQ0Y7SUFFSyxhQUFhLENBQUMsT0FBeUI7O1lBQzNDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3RDLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7aUJBQ2Y7Z0JBQ0QsSUFBSSxvQkFDQyxPQUFPLENBQ1g7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUMifQ==