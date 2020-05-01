require('dotenv').config()
require('./redis-client')
const Discord = require('discord.js')
const parser = require('discord-command-parser')
const { CMD_PREFIX } = require('./config')
const getCommands = require('./get-commands')

const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async (msg) => {
    const parsedMsg = parser.parse(msg, CMD_PREFIX)

    if (!parsedMsg.success) return
    
    const commands = getCommands()

    if (commands.has(parsedMsg.command)) {
        try {
            const command = commands.get(parsedMsg.command)
            await command.execute(msg, parsedMsg.arguments)
        } catch (err) {
            msg.reply(`Unable to process command : ${err.message}`)
        }
    } else {
        msg.reply(
            `Unknown command "${parsedMsg.command}".\n` +
            'Type "!help" to have a list of the available commands.'
        )
    }
})

client.login(process.env.DISCORD_TOKEN)
