const Patient = require('../../models/Patients');
const Report = require('../../models/Reports');
const Doctor = require('../../models/Doctors');

module.exports.registerPatient = async function (req, res) {
    //check if the patient already registered

    const patient = await Patient.findOne({ phoneno: req.body.phoneno });

    //if patient already registered display patient info
    if (patient) {
        var registerDate = String(patient.createdAt);
        registerDate = registerDate.substring(0, 10);
        return res.status(200).json({
            message: "Here is the patient information",
            name: patient.name,
            phoneno: patient.phoneno,
            registerDate: registerDate
        });
    }
    else {

        //if patient is new then create a patient in db

        let newpatient = await Patient.create(req.body);
        if (newpatient) {
            return res.status(200).json({
                message: "Patient registered suceessfully",
                patientId: newpatient._id
            });

        }
        else {
            console.log("Error while creating new patient", err);
            return res.status(500).json({
                message: "Internal server error"
            });

        }

    }
}

module.exports.createReport = async function (req, res) {

    //get all req fields from req
    const patientId = req.params.id;
    const doctorId = req.body.doctor;
    const status = req.body.Status;
    const date = req.body.date;

    //find the patient and add the report to reports array
    let patient = await Patient.findById(patientId);

    //create new report
    let newreport = await Report.create({
        doctor: doctorId,
        patient: patientId,
        Status: status,
        date: date
    });
    //add report to array
    patient.reports.push(newreport);
    patient.save();
    let details = await Report.findById(newreport._id)
        .populate('doctor', 'id name email').populate('patient', 'id name phoneno');

    //return the output
    if (newreport) {
        return res.status(200).json({
            message: "Patient Report generated Succefully below is the information",
            details: details
        })
    }
    else {
        console.log("Error while creating new patient", err);
        return res.status(500).json({
            message: "Internal server error"
        });

    }

}

//generates all reports of specific user by preserving confidential data

module.exports.allReports = async function (req, res) {

    let reports = await Patient.findById(req.params.id)
        .populate({
            path: 'reports',
            populate: {
                path: 'doctor',
                select: 'id name email'
            }
        });


    if (reports) {
        return res.status(200).json({
            message: 'There are report of user',
            allReports: reports
        })
    }
    else {
        console.log("Error while creating new patient", err);
        return res.status(500).json({
            message: "Internal server error"
        });

    }


}

