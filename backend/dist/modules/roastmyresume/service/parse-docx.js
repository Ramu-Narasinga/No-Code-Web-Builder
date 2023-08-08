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
const mammoth_1 = __importDefault(require("mammoth"));
class ParseDocx {
    getContent(resume) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docxFile = resume;
                const buffer = docxFile.data;
                let docxContent = yield mammoth_1.default.extractRawText({ buffer });
                return docxContent;
            }
            catch (err) {
                console.error(`[${new Date()}]::[Error]::[Docx-Parser]::Error in extracting docx contents`, err);
            }
        });
    }
}
exports.default = new ParseDocx();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtZG9jeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvcm9hc3RteXJlc3VtZS9zZXJ2aWNlL3BhcnNlLWRvY3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFHOUIsTUFBTSxTQUFTO0lBQ1AsVUFBVSxDQUFDLE1BQStCOztZQUM5QyxJQUFJO2dCQUNGLE1BQU0sUUFBUSxHQUFHLE1BQWlDLENBQUM7Z0JBQ25ELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksV0FBVyxHQUFHLE1BQU0saUJBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLFdBQVcsQ0FBQzthQUNwQjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQ1gsSUFBSSxJQUFJLElBQUksRUFBRSw4REFBOEQsRUFDNUUsR0FBRyxDQUNKLENBQUM7YUFDSDtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9