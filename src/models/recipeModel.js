const { DataTypes } = require('sequelize');
const { sequelize } = require('../dbconnection');
const Product = require('./productsModel');

const Recipe = sequelize.define('Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Recipe.belongsToMany(Product, { through: 'RecipeProduct' });
Product.belongsToMany(Recipe, { through: 'RecipeProduct' });

module.exports = Recipe;