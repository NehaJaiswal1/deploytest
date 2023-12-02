// const { Sequelize  } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE, process.env.ROOT_PATH, process.env.PASSWORD, {
//     host: 'mysql', 
//     dialect: 'mysql'
//     // port: 3306,
//   });

// module.exports = { sequelize };



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:anmol@369@127.0.0.1:3306/database');

module.exports = { sequelize };

const { Sequelize  } = require('sequelize');

// const sequelize = new Sequelize.Sequelize(process.env.DATABASE, process.env.ROOT_PATH, process.env.PASSWORD, {
//   dialect: 'mysql',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   timezone: '+00:00',
//   define: {
//     charset: 'utf8mb4',
//     collate: 'utf8mb4_general_ci',
//     underscored: true,
//     freezeTableName: true,
//   },
//   pool: {
//     min: 0,
//     max: 5,
//   },
//   // logQueryParameters: NODE_ENV === 'development',
//   logging: (query, time) => {
//     logger.info(time + 'ms' + ' ' + query);
//   },

//   benchmark: true,
// });


// module.exports = { sequelize };
