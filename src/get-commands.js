const fs = require('fs')
const path = require('path')

const commands = new Map()

const helpCommand = {
    name: 'help',
    description: 'Show a description of all available commands.',
    execute: (msg, args) => {
      let cmdDescriptions = 'Here is the list of all available commands :\n'
  
        commands.forEach((cmd) => {
            cmdDescriptions += `* ${cmd.name.padEnd(29, ' ')} ${cmd.description}\n`
        })

        msg.reply(cmdDescriptions)
    }
}

commands.set(helpCommand.name, helpCommand)

const files = fs.readdirSync(path.resolve(__dirname, './commands'))
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        const command = require(`./commands/${file}`)
        commands.set(command.name, command)
    })

module.exports = () => commands
