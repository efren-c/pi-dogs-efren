const { DataTypes } = require("sequelize")

const Dog = (sequelize) => {
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
      type: DataTypes.JSON,
      allowNull: false
    },
    weight: {
      type: DataTypes.JSON,
      allowNull: false
    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      validate: {
        isURL: true
      }
    }
  }, {
    timestamp: false
  })
}

module.exports = Dog