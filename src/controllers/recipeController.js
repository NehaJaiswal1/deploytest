
const { Recipe, Product } = require('../models/recipeModel');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: Product,
    });
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add other recipe-related controllers as needed

module.exports = {
  getAllRecipes,
  // Add other exports as needed
};