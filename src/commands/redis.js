const Command = require('../command')
const redis = require('../redis-client')

module.exports = new Command({
  name: 'redis-cli',
  description: {
    title: 'Command Line Interface for a Redis database.',
    usage: 'operation key [value]',
    examples: [
      'set test 123456',
      'get test',
    ]
  },
  execute: (msg, args) => {
    const operation = args.shift()
    return redis[operation](...args)
        .then((res) => msg.reply(res))
  },
})
