const mongoose=require('mongoose');

const employeeSchema = mongoose.Schema({
    name : String,
    department : String,
    dateOfBirth:{
        type:Date,
        default:Date.now
    },
    city : String,
    country : String
});

module.exports=mongoose.model('Employee',employeeSchema);