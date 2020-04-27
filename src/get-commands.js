const fs = require('fs')
const path = require('path')

const commands = new Map()

const files = fs.readdirSync(path.resolve(__dirname, './commands'))
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        const command = require(`./commands/${file}`)
        commands.set(command.name, command)
    })

module.exports = () => commands
