const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error')


//load env vars
dotenv.config({ path: "./config/config.env" });
const connectDB = require('./config/connection')

//connect to database
connectDB();
app.use(express.json());


//dev logging midlleware
if(process.env.Node_ENV === 'development'){
  app.use(morgan('dev'));
}
//Route files
const product = require('./routes/productRoute');
const category = require('./routes/categoryRoute');

//Mount routers
app.use("/api/v1/product", product);
app.use("/api/v1/category", category);


app.use(errorHandler);

const PORT = process.env.port || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.Node_env} node on port ${PORT}`
  .cyan.bold)
);




















// const express = require('express');
// const app =express();
// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;

// require("dotenv").config();

// app.use(express.json());


// mongoose.connect(process.env.DB_Connection,
//     { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true },
//     (err) => {
//       if (!err) {
//         console.log("connected to database");
//       } else {
//         console.log("No Connection");
//       }
//     }
//   );


// app.listen(port,() =>{
//     console.log(`server is running at ${port}`)
// })