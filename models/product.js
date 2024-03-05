const { Schema, model } = require('mongoose');

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

const Product = model('product', productSchema);

module.exports = Product;
