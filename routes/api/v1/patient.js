const express=require('express');
const router=express.Router();
const passport=require('passport');


const patientController=require('../../../controllers/api/patients_controller');


//to perform registration and create report actions doctor must be authourized
router.post('/register',passport.authenticate('jwt',{session:false}),patientController.registerPatient);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientController.createReport);
router.get('/:id/all_reports',patientController.allReports);


module.exports=router;