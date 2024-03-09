const Product = require('../models/product');

const { HttpError, ctrlWrapper } = require('../helpers');

const getProducts = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

const getProductById = async (req, res) => {
  const { _id } = req.params;
  const result = await Product.findById(_id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addProduct = async (req, res) => {
  const result = await Product.create(req.body);
  res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { _id } = req.params;
  const result = await Product.findByIdAndUpdate(_id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const removeProduct = async (req, res) => {
  const { _id } = req.params;
  const result = await Product.findByIdAndRemove(_id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({
    message: 'product deleted',
  });
};

module.exports = {
  getProducts: ctrlWrapper(getProducts),
  getProductById: ctrlWrapper(getProductById),
  addProduct: ctrlWrapper(addProduct),
  updateProduct: ctrlWrapper(updateProduct),
  removeProduct: ctrlWrapper(removeProduct),
};
