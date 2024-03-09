const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const productSchema = new Schema(
  {
    article: { type: String, required: true },
    name: { type: String, required: true },
    view: { type: String, required: true },
    options: [
      {
        color: { type: String, required: true },
        sizes: [{ type: String, required: true }],
      },
    ],
    price: { type: String, required: true },
    originalPrice: { type: String },
    discount: { type: String },
    compound: { type: String },
    fotos: [{ type: String }],
    video: { type: String },
    season: { type: String, required: true },
  },
  { versionKey: false }
);

productSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
  article: Joi.string().required(),
  name: Joi.string().required(),
  view: Joi.string().required(),
  options: Joi.array().items(
    Joi.object({
      color: Joi.string().required(),
      sizes: Joi.array().items(Joi.string()).required(),
    })
  ),
  price: Joi.string().required(),
  originalPrice: Joi.string(),
  discount: Joi.string(),
  compound: Joi.string(),
  fotos: Joi.array().items(Joi.string()),
  video: Joi.string(),
  season: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Product = model('product', productSchema);

module.exports = {
  Product,
  schemas,
};
