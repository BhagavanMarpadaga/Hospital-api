const mongoose = require('mongoose');

//patient is registred using name and phone number
//Patient can have multiple reports

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    reports:[
        {
            
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report'
        }
    ]

},
    {
        timestamps: true
    })

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;