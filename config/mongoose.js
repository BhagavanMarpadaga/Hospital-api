const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/hospital_api_dev');

const db=mongoose.connection;

db.on('error',function(){
    console.log("Error while connecting to db",error);
})
db.once('open',function(){
    console.log("successfully connected to database");
});

module.exports=db;
