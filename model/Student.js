const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:String,
    course:String,
    gender:String,
    gpa:Number,
    university:String,
    country:String
})

module.exports=mongoose.model('Student',studentSchema);