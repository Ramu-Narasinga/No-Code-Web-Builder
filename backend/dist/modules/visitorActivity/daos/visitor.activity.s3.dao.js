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
const debug_1 = __importDefault(require("debug"));
const dotenv_1 = require("dotenv");
const log = (0, debug_1.default)("app:in-memory-dao");
class VisitorActivityS3Dao {
    constructor() {
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
        log("Created new instance of VisitorActivityS3Dao", process.env.AWS_BUCKET_NAME);
        (0, dotenv_1.config)();
    }
    uploadActivityEvents(events) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filename = Date.now();
                console.log("process.env.AWS_BUCKET_NAME", process.env.AWS_BUCKET_NAME);
                const params = {
                    Bucket: `${process.env.AWS_BUCKET_NAME}`,
                    Key: `${filename}`,
                    Body: JSON.stringify(events)
                };
                yield this.s3.putObject(params).promise();
                return `${process.env.AWS_BUCKET_NAME}/${filename}`;
            }
            catch (err) {
                console.log("Error in uploading events to s3", err);
                throw new Error("Error in uploading events");
            }
        });
    }
}
exports.default = new VisitorActivityS3Dao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5hY3Rpdml0eS5zMy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL3Zpc2l0b3JBY3Rpdml0eS9kYW9zL3Zpc2l0b3IuYWN0aXZpdHkuczMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTBCO0FBQzFCLGtEQUEwQjtBQUMxQixtQ0FBZ0M7QUFFaEMsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxvQkFBb0I7SUFPeEI7UUFMQSxPQUFFLEdBQUcsSUFBSSxpQkFBRyxDQUFDLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtZQUMxQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUI7U0FDbkQsQ0FBQyxDQUFDO1FBR0QsR0FBRyxDQUFDLDhDQUE4QyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakYsSUFBQSxlQUFNLEdBQUUsQ0FBQztJQUNYLENBQUM7SUFFSyxvQkFBb0IsQ0FBQyxNQUFhOztZQUN0QyxJQUFJO2dCQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RSxNQUFNLE1BQU0sR0FBRztvQkFDYixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtvQkFDeEMsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFO29CQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7aUJBQzdCLENBQUE7Z0JBRUQsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDO2FBQ3JEO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzlDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLG9CQUFvQixFQUFFLENBQUMifQ==