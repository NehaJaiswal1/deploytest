const { DataTypes } = require('sequelize');
const { sequelize } = require('../dbconnection');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unit: {
    type: DataTypes.INTEGER, // Change to INTEGER
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER, // Change to INTEGER
    allowNull: false,
  },
});

module.exports = Product;