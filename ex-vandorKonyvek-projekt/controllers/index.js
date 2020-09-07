var express = require('express');
var router = express.Router();
const ProductDB = require('../services/indexService');

const productDB = new ProductDB();

/* GET home page. */
  router.get('/', async (req, res, next) => {
    let oneProduct = await productDB.getAllProducts();
 let result = res.json(oneProduct);
  console.log(result);
  return result;
});

module.exports = router;
