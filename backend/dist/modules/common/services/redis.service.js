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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
class RedisService {
    constructor() {
        this.redisClient = (0, redis_1.createClient)({
            url: process.env.redisUrl
        });
        try {
            (() => __awaiter(this, void 0, void 0, function* () {
                yield this.redisClient.connect();
            }))();
        }
        catch (err) {
            console.error("Error in connecting to redis", err);
        }
    }
    getRedisClient() {
        return this.redisClient;
    }
}
exports.default = new RedisService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL3NlcnZpY2VzL3JlZGlzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBcUM7QUFFckMsTUFBTSxZQUFZO0lBTWhCO1FBSkEsZ0JBQVcsR0FBRyxJQUFBLG9CQUFZLEVBQUM7WUFDekIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUM7UUFHRCxJQUFJO1lBQ0YsQ0FBQyxHQUFTLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQztTQUNOO1FBQUMsT0FBTSxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztDQUVGO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9