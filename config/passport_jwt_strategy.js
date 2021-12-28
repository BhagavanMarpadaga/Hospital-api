const passport=require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//we need Doctor model to establish the identity
const Doctor=require('../models/Doctors');

//Header is list of keys it has key of authourization
//auth is list of keys it has key called bearer
//This bearer has jwt token
//jwy payload reads the data from payload
var opts={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey :'secret'

}

passport.use(new JwtStrategy(opts,function(jwt_payload, done){
    console.log(jwt_payload)
    Doctor.findById(jwt_payload._id,function(err,doctor){
        if(err)
        {
            //console.log("Error in jwt authrization",err);
            return done(err,false);
        }
        if(doctor)
        {
            return done(null,doctor);
        }
        else
        {
            return done(null,false);
        }

    })

}))

module.exports=passport;