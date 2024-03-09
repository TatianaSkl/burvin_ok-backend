const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/products');
const { validateBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/product');

router.get('/', ctrl.getProducts);
router.get('/:id', authenticate, isValidId, ctrl.getProductById);
router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addProduct);
router.put('/:id', authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateProduct);
router.delete('/:id', authenticate, isValidId, ctrl.removeProduct);

module.exports = router;
