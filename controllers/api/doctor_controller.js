const Doctor = require('../../models/Doctors');
const jwt=require('jsonwebtoken');

module.exports.createDoctor = function (req, res) {

    //If doctor email id already exists in db ask doctor to sign in
    
    //check doctor existed or not
    Doctor.findOne({ email: req.body.email }, function (err, doctor) {
        if (err) {
            console.log("Error in finding the doctor", err);
            return res.status(500).json({
                message: "Internal Server error"
            })
        }
        else {
            if (doctor) {
                return res.status(200).json({
                    message: "email id is already existed in the app please log in"
                })
            }
            //if not create new doctor
            else {
                Doctor.create(req.body, function (err, doctor) {
                    if (err) {
                        console.log("Error in creating a user in db", err);
                        return res.status(500).json({
                            message: "Internal Server error"
                        })
                    }
                    else {
                        return res.status(200).json({
                            message: "Your successfully signed up into the app!"
                        })

                    }
                })

            }
        }
    })

}

module.exports.createSession=async function(req,res)
{
    try{

        let doctor =await Doctor.findOne({email:req.body.email});

        //if doctor not found
        if(!doctor||doctor.password!=req.body.password){
            return res.status(422).json({
                message:"Invalid username or password!"
            })
        }
        //if doctor found create json web token
        return res.status(200).json({
            message:"Signed in successfully, here is your token keep it safe!",
            data:{
                token:jwt.sign(doctor.toJSON(),process.env.JWT_SECRET,{expiresIn:1000000})
            }
        })

    }
    catch(err)
    {
        console.log("Error in creating a user in db", err);
        return res.status(500).json({
            message: "Internal Server error"
        })
    

    }
    
}
