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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const node_summarizer_1 = require("node-summarizer");
const s3_helper_service_1 = __importDefault(require("../../common/services/s3.helper.service"));
const rmr_dao_1 = __importDefault(require("../daos/rmr.dao"));
const roasts_1 = require("./roasts");
const apiKey = process.env.apiKey;
const apiUrl = (_a = process.env.apiUrl) !== null && _a !== void 0 ? _a : "";
class RmrService {
    constructor() { }
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
    // async getFeedback(resume: fileUpload.UploadedFile) {
    //   let docxExtraction = await ParseDocx.getContent(resume);
    //   const docxText = docxExtraction?.value ?? "";
    //   const userPrompt = this.summarize(docxText);
    //   console.log(`[RMR]::[userPrompt]::${userPrompt}`);
    //   const systemPrompt = process.env.systemPrompt ?? "";
    //   console.log(`[RMR]::[systemPrompt]::${systemPrompt}`);
    //   let summary = await this.getSummary(userPrompt, systemPrompt);
    //   console.log(`[RMR]::[summary]::${summary}`);
    //   return summary;
    // }
    getRandomIndex() {
        const randomIndex = Math.floor(Math.random() * roasts_1.roasts.length);
        return randomIndex;
    }
    getFeedback() {
        let index = this.getRandomIndex();
        return roasts_1.roasts[index];
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
                console.log("Error in creating Rmr user", err);
                throw new Error("Create Rmr User Error");
            }
        });
    }
    updateRmrUser(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield rmr_dao_1.default.updateUser(resource);
            }
            catch (err) {
                console.log("Error in updating rmr user", err);
                throw new Error("Update Rmr user Error");
            }
        });
    }
}
exports.default = new RmrService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3JvYXN0bXlyZXN1bWUvc2VydmljZS9ybXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFDMUIscURBQW9EO0FBSXBELGdHQUFzRTtBQUN0RSw4REFBcUM7QUFFckMscUNBQWtDO0FBRWxDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLG1DQUFJLEVBQUUsQ0FBQztBQUV4QyxNQUFNLFVBQVU7SUFFZCxnQkFBZ0IsQ0FBQztJQUVILFVBQVUsQ0FBQyxVQUFrQixFQUFFLFlBQW9COztZQUMvRCxJQUFJO2dCQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FDL0IsTUFBTSxFQUNOO29CQUNFLEtBQUssRUFBRSxlQUFlO29CQUN0QixRQUFRLEVBQUU7d0JBQ1I7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsT0FBTyxFQUFFLFlBQVk7eUJBQ3RCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxNQUFNOzRCQUNaLE9BQU8sRUFBRSxVQUFVO3lCQUNwQjtxQkFDRjtpQkFDRixFQUNEO29CQUNFLE9BQU8sRUFBRTt3QkFDUCxhQUFhLEVBQUUsVUFBVSxNQUFNLEVBQUU7cUJBQ2xDO2lCQUNGLENBQ0YsQ0FBQztnQkFFRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVELE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDakUsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVPLFNBQVMsQ0FBQyxPQUFlO1FBQy9CLElBQUk7WUFDRixJQUFJLFVBQVUsR0FBRyxJQUFJLG1DQUFpQixDQUNwQyxPQUFPLEVBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FDOUIsQ0FBQztZQUNGLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUN6RCxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx3REFBd0QsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsNkRBQTZEO0lBQzdELGtEQUFrRDtJQUNsRCxpREFBaUQ7SUFDakQsdURBQXVEO0lBQ3ZELHlEQUF5RDtJQUN6RCwyREFBMkQ7SUFDM0QsbUVBQW1FO0lBQ25FLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsSUFBSTtJQUVKLGNBQWM7UUFDWixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEMsT0FBTyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVLLGNBQWMsQ0FBQyxNQUErQjs7WUFDbEQsSUFBSTtnQkFDRixPQUFPLE1BQU0sMkJBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6RztZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsUUFBdUI7O1lBQ3pDLElBQUk7Z0JBQ0YsT0FBTyxNQUFNLGlCQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFFBQXVCOztZQUN6QyxJQUFJO2dCQUNGLE9BQU8sTUFBTSxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztZQUFDLE9BQU0sR0FBRyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyJ9