// api/sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('unitemusic', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;