const mongoose = require("mongoose");
require('dotenv').config();
//connect database
mongoose
    .connect(process.env.mongo_url)
    .then(()=>{
        console.log("db is connected");
    })
    .catch((err) =>{
        console.log(err);
    });