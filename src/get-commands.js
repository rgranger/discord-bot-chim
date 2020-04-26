const fs = require('fs')
const path = require('path')

const commands = new Map()
const fileExtension = '.js'

const files = fs.readdirSync(path.resolve(__dirname, './commands'))
    .filter((file) => file.endsWith(fileExtension))
    .forEach((file) => {
        const commandName = path.basename(file, fileExtension)
        const command = require(`./commands/${file}`)
        console.log('commandName', commandName)
        commands.set(commandName, command)
    })

module.exports = () => commands
