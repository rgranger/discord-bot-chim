const createRedisClient = require('./create-redis-client')

const redisSubClient = createRedisClient()

redisSubClient.subscribe('discord', (err, count) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Successfully subscribed to channel "discord".')
    }
})

module.exports = redisSubClient
