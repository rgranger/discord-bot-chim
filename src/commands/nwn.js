const Command = require('../command')
const redis = require('../redis/redis-pub-client')

module.exports = new Command({
  name: 'nwn',
  description: {
    title: 'Publish a msg on the "nwn" channel.',
    usage: 'message',
    examples: [
      'this is a "test message"',
      'reboot 30',
    ]
  },
  execute: (msg, args) => {
    const data = args.join(' ')

    if (!data) throw new Error('Argument "message" must not be empty.')

    const newMessage = JSON.stringify({
      userID: msg.author.id,
      data,
    })

    return redis.publish('nwn', newMessage)
        .then((res) => msg.reply(res))
  },
})
