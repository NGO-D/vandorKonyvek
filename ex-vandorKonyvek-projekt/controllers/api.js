var express = require('express');
var router = express.Router();
const MockBll = require('../bll/mockBLL');

const mockBLL = new MockBll();

// MOCKS
// Get all mocks
router.get('/mock', async (req, res, next) => {
  let result = await mockBLL.getMock();
  res.json(result);
});

/*
// Get one product
router.get('/products/:id', async (req, res, next) => {
  let result = await productService.getOneProduct();
  res.json(result);
});

// Update product
router.post('/products/:id', async (req, res, next) => {
  let result = await productService.updateProduct(req.body);
  res.json(result);
});

// Create new product
router.put('/products', async (req, res, next) => {
  let result = await productService.createProduct(req.body);
  res.json(result);
});

*/

module.exports = router;