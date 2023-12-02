// const { Sequelize  } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE, process.env.ROOT_PATH, process.env.PASSWORD, {
//     host: 'localhost', 
//     dialect: 'mysql',
//     port: 3306,
//   });

// module.exports = { sequelize };



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:Neha@369@localhost:3306/database');

module.exports = { sequelize };
