var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

// Define routes for CRUD operations
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
