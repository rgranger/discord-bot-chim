const fs = require('fs')
const path = require('path')
const { CMD_PREFIX } = require('./config')
const Command = require('./command')

const commands = new Map()

const helpCommand = new Command({
    name: 'help',
    description: {
        title: 'Show a description of all available commands.',
        usage: '[commandName]'
    },
    execute: (msg, args) => {
        const commandName = args._[0]

        if (commandName !== undefined) {
            if (!commands.has(commandName)) {
                return msg.reply(`Unknown command "${commandName}"`)
            } else {
                const command = commands.get(commandName)
                return msg.reply(command.getLongDesc())
            }
        } else {
            let cmdDescriptions = 'Here is the list of all available commands :\n'
  
            commands.forEach((cmd) => {
                cmdDescriptions += `* ${CMD_PREFIX}${cmd.name.padEnd(29, ' ')} ${cmd.getShortDesc()}\n`
            })

            return msg.reply(cmdDescriptions)
        }
    }
})

commands.set(helpCommand.name, helpCommand)

const files = fs.readdirSync(path.resolve(__dirname, './commands'))
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        const command = require(`./commands/${file}`)
        commands.set(command.name, command)
    })

module.exports = () => commands
