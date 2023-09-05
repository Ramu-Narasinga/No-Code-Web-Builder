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
const redis_service_1 = __importDefault(require("../../common/services/redis.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class RmrDao {
    constructor() {
        this.redisClient = redis_service_1.default.getRedisClient();
        log('Created new instance of views Dao');
    }
    incrViewsCount(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield this.redisClient.incr(url)) || 0;
            }
            catch (err) {
                console.error('Error incrementing visitor count:', err);
            }
        });
    }
}
exports.default = new RmrDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3MuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy92aWV3cy9kYW9zL3ZpZXdzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUErRDtBQUMvRCxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxNQUFNO0lBSVI7UUFGQSxnQkFBVyxHQUFHLHVCQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7UUFHMUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVLLGNBQWMsQ0FBQyxHQUFXOztZQUM5QixJQUFJO2dCQUNGLE9BQU8sQ0FBQSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQzthQUM5QztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDekQ7UUFDSCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMifQ==