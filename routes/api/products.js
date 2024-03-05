const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/products');
// const { authenticate } = require('../../middlewares');

router.get('/', ctrl.getProducts);

module.exports = router;
