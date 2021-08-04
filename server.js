const express = require('express');
const app =express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json());


mongoose.connect(process.env.DB_Connection,
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true },
    (err) => {
      if (!err) {
        console.log("connected to database");
      } else {
        console.log("No Connection");
      }
    }
  );


app.listen(port,() =>{
    console.log(`server is running at ${port}`)
})