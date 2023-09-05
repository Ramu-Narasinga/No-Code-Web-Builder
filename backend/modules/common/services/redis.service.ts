import { createClient } from 'redis';

class RedisService {

  redisClient = createClient({
    url: process.env.redisUrl
  });

  constructor() {
    try {
      (async () => {
        await this.redisClient.connect();
      })();
    } catch(err) {
      console.error("Error in connecting to redis", err);
    }
  }

  getRedisClient() {
    return this.redisClient;
  }

}

export default new RedisService();
