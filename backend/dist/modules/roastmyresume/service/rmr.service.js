"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importStar(require("dotenv"));
const node_summarizer_1 = require("node-summarizer");
const parse_docx_1 = __importDefault(require("./parse-docx"));
const s3_helper_service_1 = __importDefault(require("../../common/services/s3.helper.service"));
const rmr_dao_1 = __importDefault(require("../daos/rmr.dao"));
const dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const apiKey = process.env.apiKey;
const apiUrl = (_a = process.env.apiUrl) !== null && _a !== void 0 ? _a : "";
class RmrService {
    constructor() {
        (0, dotenv_1.config)();
    }
    getSummary(userPrompt, systemPrompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(apiUrl, {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: systemPrompt,
                        },
                        {
                            role: "user",
                            content: userPrompt,
                        },
                    ],
                }, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                });
                const summary = response.data.choices[0].message["content"];
                return summary;
            }
            catch (error) {
                console.error("[Error]::[Get-Summary-Fn]::[ChatGPT-API]", error);
                return null;
            }
        });
    }
    summarize(content) {
        try {
            let Summarizer = new node_summarizer_1.SummarizerManager(content, process.env.numberOfSentences);
            let summary = Summarizer.getSummaryByFrequency().summary;
            return summary;
        }
        catch (err) {
            console.error("[Error]::[Summarize]::Error in summarising the content", err);
        }
    }
    getFeedback(resume) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let docxExtraction = yield parse_docx_1.default.getContent(resume);
            const docxText = (_a = docxExtraction === null || docxExtraction === void 0 ? void 0 : docxExtraction.value) !== null && _a !== void 0 ? _a : "";
            const userPrompt = this.summarize(docxText);
            const systemPrompt = (_b = process.env.systemPrompt) !== null && _b !== void 0 ? _b : "";
            let summary = yield this.getSummary(userPrompt, systemPrompt);
            return summary;
        });
    }
    saveResumeToS3(resume) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield s3_helper_service_1.default.upload(`${process.env.S3_FOLDER_ROASTMYRESUME}${Date.now()}`, resume.data);
            }
            catch (err) {
                console.error(`[Error]::[Save-Resume-To-S3]:: ${err}`);
            }
        });
    }
    createRmrUser(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield rmr_dao_1.default.createUser(resource);
            }
            catch (err) {
                console.log("Error in visitor activity service", err);
                throw new Error("Create Feedback Activity Error");
            }
        });
    }
}
exports.default = new RmrService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3JvYXN0bXlyZXN1bWUvc2VydmljZS9ybXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixpREFBd0M7QUFDeEMscURBQW9EO0FBQ3BELDhEQUFxQztBQUdyQyxnR0FBc0U7QUFDdEUsOERBQXFDO0FBRXJDLE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO0lBQ3RCLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQztDQUMxQjtBQUVELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLG1DQUFJLEVBQUUsQ0FBQztBQUV4QyxNQUFNLFVBQVU7SUFFZDtRQUNFLElBQUEsZUFBTSxHQUFFLENBQUM7SUFDWCxDQUFDO0lBRWEsVUFBVSxDQUFDLFVBQWtCLEVBQUUsWUFBb0I7O1lBQy9ELElBQUk7Z0JBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUMvQixNQUFNLEVBQ047b0JBQ0UsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxPQUFPLEVBQUUsWUFBWTt5QkFDdEI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLE1BQU07NEJBQ1osT0FBTyxFQUFFLFVBQVU7eUJBQ3BCO3FCQUNGO2lCQUNGLEVBQ0Q7b0JBQ0UsT0FBTyxFQUFFO3dCQUNQLGFBQWEsRUFBRSxVQUFVLE1BQU0sRUFBRTtxQkFDbEM7aUJBQ0YsQ0FDRixDQUFDO2dCQUVGLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxPQUFPLENBQUM7YUFDaEI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0lBRU8sU0FBUyxDQUFDLE9BQWU7UUFDL0IsSUFBSTtZQUNGLElBQUksVUFBVSxHQUFHLElBQUksbUNBQWlCLENBQ3BDLE9BQU8sRUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUM5QixDQUFDO1lBQ0YsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ3pELE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzlFO0lBQ0gsQ0FBQztJQUVLLFdBQVcsQ0FBQyxNQUErQjs7O1lBQy9DLElBQUksY0FBYyxHQUFHLE1BQU0sb0JBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBQSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsS0FBSyxtQ0FBSSxFQUFFLENBQUM7WUFDN0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxNQUFNLFlBQVksR0FBRyxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxtQ0FBSSxFQUFFLENBQUM7WUFDcEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM5RCxPQUFPLE9BQU8sQ0FBQzs7S0FDaEI7SUFFSyxjQUFjLENBQUMsTUFBK0I7O1lBQ2xELElBQUk7Z0JBQ0YsT0FBTyxNQUFNLDJCQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekc7WUFBQyxPQUFNLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFFBQXVCOztZQUN6QyxJQUFJO2dCQUNGLE9BQU8sTUFBTSxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTthQUNsRDtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyJ9