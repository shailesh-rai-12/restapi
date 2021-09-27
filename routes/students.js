const express =require('express');

const router = express.Router();
const Student = require('../model/Student');
var sleep=require('system-sleep')

//routes

router.get('/students',(req,res)=>{
    console.log("GET");
   // sleep(3000);
    Student.find()
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json({'error':err});
    })
})


router.get('/student',(req,res)=>{
    //console.log(req.query);
    Student.findById(req.query.id)
    .then((response)=>{
        res.json(response);
    })
    .catch(err =>{
        res.json({'error':err});
    })
})


router.post('/students',(req,res)=>{
   //console.log(req.body);
    const student = new Student({
        name:req.body.name,
        course:req.body.department,
        gender:req.body.gender,
        gpa:req.body.gpa,
        university:req.body.university,
        country:req.body.country  
    });
    //console.log(employee)
    student.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    })
});

module.exports=router