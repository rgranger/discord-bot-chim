const { Sequelize } = require('sequelize')
const sequelize = require('../mysql-client')

const SqlPersonnage = sequelize.define('sql_personnage', {
    Compte: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Clef: {
        type: Sequelize.STRING(10),
        allowNull: true,
    },
    Nom: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    DiscordId: {
        type: Sequelize.STRING(20),
        allowNull: true,
    },
    Nourriture: {
        type: Sequelize.FLOAT(4, 1),
        allowNull: true,
    },
    dateDeco: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DisguiseName: {
        type: Sequelize.STRING(200),
        allowNull: true
    }
}, {
    freezeTableName: true,
})

SqlPersonnage.removeAttribute('id')

module.exports = {
    SqlPersonnage
}
