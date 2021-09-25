const express =require('express');

const router = express.Router();
const Employee = require('../model/Employee');


//routes

router.get('/employees',(req,res)=>{
    console.log("GET");
    Employee.find()
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json({'error':err});
    })
})


router.post('/employees',(req,res)=>{
   //console.log(req.body);
    const employee = new Employee({
        name:req.body.name,
        department:req.body.department,
        dateOfBirth:new Date(req.body.dateOfBirth),
        city:req.body.city,
        country:req.body.country  
    });
    //console.log(employee)
    employee.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    })
});

module.exports=router