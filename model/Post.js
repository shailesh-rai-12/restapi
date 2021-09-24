
const mongoose= require('mongoose');

const PostSchema =mongoose.Schema({
    title: String,
    description:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:function(){ return Date.now()}
    } 
});

module.exports= mongoose.model('Posts',PostSchema);