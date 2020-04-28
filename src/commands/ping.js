const Command = require('../command')

module.exports = new Command({
    name: 'ping',
    description: {
        title: "Reply with a 'Pong'",
    },
    execute: (msg, args) => {
        msg.reply('Pong.')
    },
})
