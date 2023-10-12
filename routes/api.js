var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')
const categoriesController = require('../controllers/CategoriesController')

// Define routes for CRUD operations
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// categories
router.get('/Categories', categoriesController.getCategories);
router.get('/Categories/:id', categoriesController.getCategoriesById);
router.post('/Categories', categoriesController.createCategories);
router.put('/Categories/:id', categoriesController.updateCategories);
router.delete('/Categories/:id', categoriesController.deleteCategories);


module.exports = router;
