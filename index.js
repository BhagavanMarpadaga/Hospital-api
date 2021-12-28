const express=require('express');
const port=8000;
const app=express();

const db=require('./config/mongoose');
const passport=require('passport');
//Authentication using jwt
const passport_jwt_strategy=require('./config/passport_jwt_strategy');

app.use(express.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.send("<p>good</p>");
})
app.use('/',require('./routes'));


//fires server using express
app.listen(port,function(err){

    if(err)
    {
        console.log("Error while seeting up the server",err);
        return;
    }

    console.log('Server is up on port ',port);
})