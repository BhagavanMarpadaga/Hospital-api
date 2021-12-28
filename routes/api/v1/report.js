const express=require('express');
const router=express.Router();
const passport=require('passport');

const reportController=require('../../../controllers/api/report_controller');

router.get('/:status',passport.authenticate('jwt',{session:false}),reportController.reports);


module.exports=router;