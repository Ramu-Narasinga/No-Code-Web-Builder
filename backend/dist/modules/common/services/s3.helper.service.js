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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = require("dotenv");
class S3Helper {
    constructor() {
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
        (0, dotenv_1.config)();
    }
    upload(fileName, Body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = {
                    Bucket: `${process.env.AWS_BUCKET_NAME}`,
                    Key: `${fileName}`,
                    Body
                };
                yield this.s3.putObject(params).promise();
                return `${process.env.AWS_BUCKET_NAME}/${fileName}`;
            }
            catch (err) {
                console.log("Error in uploading events to s3", err);
                throw new Error("Error in uploading events");
            }
        });
    }
}
exports.default = new S3Helper();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMuaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL2NvbW1vbi9zZXJ2aWNlcy9zMy5oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUEwQjtBQUMxQixtQ0FBZ0M7QUFFaEMsTUFBTSxRQUFRO0lBT1o7UUFMQSxPQUFFLEdBQUcsSUFBSSxpQkFBRyxDQUFDLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtZQUMxQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUI7U0FDbkQsQ0FBQyxDQUFDO1FBR0QsSUFBQSxlQUFNLEdBQUUsQ0FBQztJQUNYLENBQUM7SUFFSyxNQUFNLENBQUMsUUFBZ0IsRUFBRSxJQUFxQjs7WUFDbEQsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRztvQkFDYixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtvQkFDeEMsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFO29CQUNsQixJQUFJO2lCQUNMLENBQUE7Z0JBRUQsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDO2FBQ3JEO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzlDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=