const Report=require('../../models/Reports');

module.exports.reports= async function(req,res){

    //get report based on specific status
    let reports=await Report.find({Status:req.params.status});

    //console.log(reports);

    return res.status(200).json({
        message:"here are your reports"
    })
}
