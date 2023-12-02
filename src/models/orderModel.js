const { DataTypes } = require('sequelize');
const { sequelize } = require('../dbconnection');
const Recipe = require('./recipeModel');
const Modifier = require('./modifierModel');

const Order = sequelize.define('Order', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Recipe.belongsTo(Order);
Order.hasMany(Recipe);

Modifier.belongsTo(Order);
Order.hasMany(Modifier);

module.exports = Order;