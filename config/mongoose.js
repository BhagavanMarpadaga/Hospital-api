const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);

const db=mongoose.connection;

db.on('error',function(error){
    console.log("Error while connecting to db",error);
})
db.once('open',function(){
    console.log("successfully connected to database");
});

module.exports=db;
