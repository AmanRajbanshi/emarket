const express = require("express");
const allqueryresults = require('../middleware/allqueryresults');
const Product=require('../models/productModel')
const router = express.Router({ mergeParams: true });
const {
  getProducts,
  getProduct,
  postProducts,
  updateProducts,
  deleteProducts,

} = require("../controllers/productController");

router
.route('/')
.get(allqueryresults(Product,{path:'category',
select:'name'
}),getProducts)
.post(postProducts)

router.route('/:id')
.get(getProduct)
.put(updateProducts)
.delete(deleteProducts)
module.exports = router;
