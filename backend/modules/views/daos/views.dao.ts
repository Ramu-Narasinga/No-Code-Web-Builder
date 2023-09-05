import redisService from '../../common/services/redis.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class RmrDao {

    redisClient = redisService.getRedisClient();

    constructor() {
      log('Created new instance of views Dao');
    }

    async incrViewsCount(url: string) {
      try {
        return await this.redisClient.incr(url) || 0; 
      } catch (err) {
        console.error('Error incrementing visitor count:', err);
      }
    }
}

export default new RmrDao();

