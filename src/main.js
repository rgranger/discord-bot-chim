require('dotenv').config()
const Discord = require('discord.js')
const minimist = require('minimist')
const getCommands = require('./get-commands')

const PREFIX = '!'

const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
    if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
    
    const commands = getCommands()

    const args = msg.content.slice(PREFIX.length).split(/ +/)
    const commandName = args.shift().toLowerCase()

    if (commands.has(commandName)) {
        try {
            const command = commands.get(commandName)
            command.execute(msg, minimist(args, command.options))
        } catch (err) {
            msg.reply(`Unable to process command : ${err.message}`)
        }
    } else {
        msg.reply(`Unknown command "${commandName}".\nType "!help" to have a list of the available commands.`)
    }
})

client.login(process.env.DISCORD_TOKEN)
