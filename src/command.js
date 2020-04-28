const { CMD_PREFIX } = require('./config')

module.exports = class Command {
    constructor ({
        name,
        execute = (msg) => msg.reply('Command not implemented.'),
        description: { title = '', usage = '', examples = [], options = [] } = {}
    } = {}) {
        this.name = name
        this.execute = execute
        this.title = title
        this.usage = usage
        this.examples = examples
        this.options = options
    }

    getShortDesc () { return this.title }
    getLongDesc () {
        return `${this.title}\n` +
            `${this.getUsageDesc()}\n` +
            `${this.getExampleDesc()}\n` +
            this.options.join('\n')
    }

    getUsageDesc () { return `Usage: ${CMD_PREFIX}${this.name} ${this.usage}` }
    getExampleDesc () {
        if (this.examples.length === 0) {
            return ''
        } else if (this.examples.length === 1) {
            return `Example : ${CMD_PREFIX}${this.name} ${this.examples[0]}`
        } else {
            return 'Examples :\n' + this.examples
                .map((example) => `* ${CMD_PREFIX}${this.name} ${example}`)
                .join('\n')
        }
    }
    getOptionsDesc () {
        if (this.options.length === 0) {
            return ''
        } else {
            return 'Options :\n' + this.options.join('\n')
        }
    }
}
