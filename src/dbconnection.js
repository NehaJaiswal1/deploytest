const { Sequelize  } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.ROOT_PATH, process.env.PASSWORD, {
    host: 'localhost', 
    dialect: 'mysql',
  });

module.exports = { sequelize };