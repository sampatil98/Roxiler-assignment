const mongoose=require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongo_URI);

module.exports={connection};