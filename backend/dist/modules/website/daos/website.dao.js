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
            return yield this.prisma.website.create({
                data: Object.assign(Object.assign({}, website), { status: create_email_dto_1.Status.DRAFT, html: (_a = process.env.websiteDefaultTemplateHtml) !== null && _a !== void 0 ? _a : '', css: (_b = process.env.websiteDefaultTemplateCss) !== null && _b !== void 0 ? _b : '' }),
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3dlYnNpdGUvZGFvcy93ZWJzaXRlLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFpRTtBQUNqRSxrREFBMEI7QUFHMUIsdUVBQTBEO0FBQzFELG1DQUFnQztBQUVoQyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFVBQVU7SUFHZDtRQUNFLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM5QyxJQUFBLGVBQU0sR0FBRSxDQUFDO0lBQ1gsQ0FBQztJQUVLLGFBQWEsQ0FBQyxPQUF5Qjs7O1lBQzNDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3RDLElBQUksa0NBQ0MsT0FBTyxLQUNWLE1BQU0sRUFBRSx5QkFBTSxDQUFDLEtBQUssRUFDcEIsSUFBSSxFQUFFLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsbUNBQUksRUFBRSxFQUNsRCxHQUFHLEVBQUUsTUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixtQ0FBSSxFQUFFLEdBQ2pEO2FBQ0YsQ0FBQyxDQUFBOztLQUNIO0lBRUssYUFBYSxDQUFDLE9BQXlCOztZQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2lCQUNmO2dCQUNELElBQUksb0JBQ0MsT0FBTyxDQUNYO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIn0=