const { Order, Recipe, Modifier, Product } = require('../models/orderModel');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Recipe,
          include: [
            Product,
            {
              model: Modifier,
              include: Product,
            },
          ],
        },
      ],
    });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add other order-related controllers as needed

module.exports = {
  getAllOrders,
  // Add other exports as needed
};