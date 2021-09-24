const express=require('express');
const router= express.Router();
const Post= require('../model/Post')


 
//routes
router.get('/',(req,res,next)=>{
    console.log('server running');
    res.send("<h1>Hello World</h1>");
});

router.get('/posts',(req,res)=>{
    console.log('post-get');
});

router.post('/posts',(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description,
        
    });

    post.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    })
});

module.exports=router;