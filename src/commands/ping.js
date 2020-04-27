module.exports = {
    name: 'ping',
    description: "Reply with a 'Pong'",
    execute: (msg, args) => {
        msg.reply('Pong.')
    },
}
