const { DataTypes } = require('sequelize');
const { sequelize } = require('../dbconnection');
const Product = require('./productsModel');
const Recipe = require('./recipeModel');

const Modifier = sequelize.define('Modifier', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Recipe.hasMany(Modifier);
Modifier.belongsTo(Recipe);

Modifier.belongsTo(Product);

module.exports = Modifier;