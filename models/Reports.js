const mongoose=require('mongoose');

//A report has reference to doctor and patient along with status
//and date on which it is generated

const reportSchema=new mongoose.Schema({
     doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
     },
     patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
     },
     Status:{
         type:String,
         enum:  [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit],
         required:true
     },
     date:{
         type:String,
         required:true
     }

},
{
    timestamps:true
})

const Report=mongoose.model('Report',reportSchema);

module.exports=Report;