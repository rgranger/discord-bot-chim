require('dotenv').config()
const Discord = require('discord.js')
const parser = require('discord-command-parser')
const { CMD_PREFIX } = require('./config')
const getCommands = require('./get-commands')
const redisSubClient = require('./redis/redis-sub-client')

const client = new Discord.Client()

redisSubClient.on('message', (channel, message) => {
    console.log(`Received message "${message}" from channel "${channel}"`)

    if (client.channels.cache.has('703964971549196339')) {
        const discordChannel = client.channels.cache.get('703964971549196339')
        try {
            const { userID, data } = JSON.parse(message)
            discordChannel.send(message)
            if (client.users.cache.has(userID)) {
                client.users.cache.get(userID).send(data)
            } else {
                discordChannel.send(`Unable to send data to User "${userID}" : do not exist.`)
            }
        } catch (err) {
            discordChannel.send(`Unable to process message : ${message}\n${err}`)
        }
    } else {
        console.error(`Channel with id "${703964971549196339}" not found.`)
    }
})

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
