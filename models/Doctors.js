const mongoose=require('mongoose');

//Doctor can register with fiels name email and password
//Here email id serves as unique id

const doctorSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})


const Doctor=mongoose.model('Doctor',doctorSchema);
module.exports=Doctor;
