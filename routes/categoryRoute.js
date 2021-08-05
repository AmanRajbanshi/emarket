const express = require("express");
const router = express.Router();
const {
  getCategorys,
  getCategory,
  postCategorys,
  updateCategorys,
  deleteCategorys,

} = require("../controllers/categoryController");

const productRouter = require('./productRoute');


router.use('/:categoryId/product', productRouter);


router
.route('/')
.get(getCategorys)
.post(postCategorys)

router.route('/:id')
.get(getCategory)
.put(updateCategorys)
.delete(deleteCategorys)
module.exports = router;
