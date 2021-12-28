const express=require('express');
const router=express.Router();
const passport=require('passport');


const doctor_controller=require('../../../controllers/api/doctor_controller');

router.post('/register',doctor_controller.createDoctor);
router.post('/login',doctor_controller.createSession);

module.exports=router;