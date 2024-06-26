// api/models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('User', {
  // atributos do modelo
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true, // Mantendo o uuid único
    allowNull: false,
  },
  numericId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, // Tornando numericId a chave primária
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  }
}, {
  timestamps: true,
});

module.exports = User;