const { DataTypes } = require("sequelize")

const Temperament = (sequelize) => {
    sequelize.define("Temperament", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamp: false
    })
}

module.exports = Temperament