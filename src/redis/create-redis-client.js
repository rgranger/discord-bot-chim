const Redis = require('ioredis')

module.exports = function createRedisClient () {
    return new Redis({
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        password: process.env.REDIS_PASSWORD,
    });
}
