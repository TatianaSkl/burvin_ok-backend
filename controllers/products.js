const Product = require('../models/product');

const { ctrlWrapper } = require('../helpers');

const getProducts = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

module.exports = {
  getProducts: ctrlWrapper(getProducts),
};
