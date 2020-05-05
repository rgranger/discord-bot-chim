const Command = require('../command')
const { SqlPersonnage } = require('../mysql/models/sql-personnage')

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
  execute: async (msg, args) => {
    const accountName = args[0]
    const nwnPublicCdKey = args[1]

    if (!accountName) throw new Error('Argument "accountName" must not be empty.')
    if (!nwnPublicCdKey) throw new Error('Argument "nwnPublicCdKey" must not be empty.')

    const sqlPersonnage = await SqlPersonnage.findOne({
        where: {
          Compte: accountName,
          Clef: nwnPublicCdKey,
        }
    })

    if (!sqlPersonnage) {
      throw new Error(`User with accountName="${accountName}" and nwnPublicCdKey="${nwnPublicCdKey}" not found.`)
    }

    await sqlPersonnage.update({ DiscordId: msg.author.id })
    msg.reply('Successfully registered.')
  },
})
