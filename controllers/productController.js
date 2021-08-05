const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Product = require("../models/productModel");

//@desc   get all products
//@route Get /api/v1/product

//@access Public
exports.getProducts = asyncHandler(async (req, res, next) => {
    if(req.params.categoryId){
     const getproduct = await Product.find({category:req.params.categorId});
     res.status(200).json({
       status:true,
       data:getproduct
     })}else{

    res.status(200).json(res.allqueryresults);
     }

});

//@desc   get  product
//@route Get /api/v1/product/id
//@access Public
exports.getProduct = async (req, res, next) => {
  try {
   const id= req.params.id

    const getproduct = await Product.findById({_id:id});
    res.status(201).json(getproduct);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};


//@desc   create l product
//@route Post /api/v1/product
//@access Public
exports.postProducts = asyncHandler(async (req, res, next) => {
  req.body.category=req.params.categoryId
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, msg: product });
});

//@desc   update all product
//@route update /api/v1/product/:id
//@access Public
exports.updateProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json(product);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: product });
});

//@desc   delete all product
//@route Delete /api/v1/product/:id
//@access Public
exports.deleteProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id, req.body);
  res.json(product);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: product });
});

// //Pagination
// const page = parseInt(req.query.page, 10) || 1;
// const limit = parseInt(req.query.limit,10) || 100;
// const startIndex = (page-1) * limit;
// const endIndex = page *limit;
// const total = await Product.countDocuments();

// query = query.skip(startIndex).limit(limit);

// //executing query
//     const product =await query;

//    //pagination result
//    const pagination = {};
//    if(endIndex < total) {
//        pagination.next = {
//            page: page+1,
//            limit
//        }
//    }

//    if(startIndex > 0) {
//     pagination.prev = {
//         page: page-1,
//         limit
//     }
// }

//     res
//     .status(201)
//     .json({count:product.length,pagination, product} );

// let query;

// //copy req.query
// const reqQuery = {...req.query };

// //fields to exclude
// const removeFields  = ['select'];

// //loop over removeFields and delete them from reqQuery
// removeFields.forEach(param => delete reqQuery[param]);

// //create query string
// let queryStr = JSON.stringify(reqQuery);

// //let queryStr = JSON.stringify(req.query);

// //finding resource
// query = Product.find(JSON.parse(queryStr));

// //select feilds
// if(req.query.select) {
//     const fields = req.query.select.split(',').join(' ');
//     query = query.select(fields);
// }
// //sort
// if(req.query.sort) {
// const sortBy = req.query.select.split(',').join(' ');
//     query = query.sort(sortBy);
// }else{
//     query = query.sort('name');
// }

// })
