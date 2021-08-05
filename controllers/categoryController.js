const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Category = require("../models/categoryModel");

//@desc   get all category
//@route Get /api/v1/category

//@access Public
exports.getCategorys = asyncHandler(async (req, res, next) => {
  try {
    const getcategory = await Category.find({});
    res.status(201).json(getcategory);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

//@desc   get  product
//@route Get /api/v1/product/id
//@access Public
exports.getCategory = async (req, res, next) => {
  try {
   const id= req.params.id

    const getcategory = await Category.findById({_id:id});
    res.status(201).json(getcategory);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};


//@desc   create l product
//@route Post /api/v1/product
//@access Public
exports.postCategorys = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({ success: true, msg: category });
});

//@desc   update all product
//@route update /api/v1/product/:id
//@access Public
exports.updateCategorys = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body);
  res.json(category);

  if (!category) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: category });
});

//@desc   delete all product
//@route Delete /api/v1/product/:id
//@access Public
exports.deleteCategorys = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id, req.body);
  res.json(category);

  if (!category) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: category });
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
