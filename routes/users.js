const express =require('express')

const router = express.Router();
const User = require('../model/User');


//routes

router.post('/register',(req,res)=>{
   // console.log(req.query);
   User.findOne({email:req.query.email})
        .then(result =>{
            if(!result)
            {
                const user=new User({
                name:req.query.name,
                email:req.query.email,
                password:req.query.password });
                user.save()
                .then(() =>{
                    res.json({'flag':1});
                })
            
            }else{
                res.json({'flag':-1});
            }
                
        })
    // 
    
})

router.post('/login',(req,res)=>{
    User.findOne({email:req.query.email})
        .then(result =>{
            if(result)
            {
                if(result.password==req.query.password)
                     res.json({'flag':1});
                else
                     res.json({'flag':0});
            
            }else{
                res.json({'flag':-1});
            }
                
        })
})

module.exports=router;