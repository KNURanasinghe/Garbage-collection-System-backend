const mongoose = require('mongoose');

//connecting to mongodb database
const connection = mongoose.createConnection('mongodb+srv://MongoDB:Nida2000@mycluster.k48gd2v.mongodb.net/garbageSystem').on('open',()=>{
    console.log("MongoDB Connected");
}).on('error',()=>{
    console.log("MongoDB connection error");
});


module.exports = connection;