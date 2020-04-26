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
    const command = args.shift().toLowerCase()

    console.log('command', command)

    if (commands.has(command)) {
        try {
            commands.get(command)(msg, args)
        } catch (err) {
            console.error(err.message)
            msg.reply(`Unable to process command : ${err.message}`)
        }
    } else {
        msg.reply(`Unknown command "${command}".\nType "!help" to have a list of the available commands.`)
    }
})

client.login(process.env.DISCORD_TOKEN)
