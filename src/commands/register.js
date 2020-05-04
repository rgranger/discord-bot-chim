const Command = require('../command')
const mysql = require('../mysql/mysql-client')

module.exports = new Command({
  name: 'register',
  description: {
    title: 'Link your nwn account with discord.',
    usage: 'accountName nwnPublicCdKey',
    examples: [
      'Bilbo zAZeZE1231AZE1231AZEvnrPOINPUINknj1840A',
      'Durandil ejzpoajPEJAZPEJakzje0aze113A564',
    ]
  },
  execute: (msg, args) => {
    const accountName = args[0]
    const nwnPublicCdKey = args[1]

    if (!accountName) throw new Error('Argument "accountName" must not be empty.')
    if (!nwnPublicCdKey) throw new Error('Argument "nwnPublicCdKey" must not be empty.')

    return Promise.resolve(msg.reply('WIP'))
  },
})
