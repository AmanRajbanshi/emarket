const mongoose = require("mongoose");




const connectDB = async () =>{
  
const conn = await mongoose.connect(process.env.DB_Connection,
    { 
        useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex:true,
        useFindAndModify:false
        },
    (err) => {
      if (!err) {
        console.log(`connected to database`.yellow.bold);
      } else {
        console.log("No Connection".red.bold);
      }
    }
  );
  
    
}
module.exports = connectDB;
