const express=require('express');
const router= express.Router();
const Post= require('../model/Post')


 
//routes
router.get('/',(req,res)=>{
    
    Post.find()
    .then((response)=>{
            res.json(response);
    })
    .catch((err)=>{
            console.log(err);
    })

    
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


router.get('/:postId',(req,res)=>{
    Post.findById(req.params.postId)
        .then((response)=>{
            res.json(response);
        })
        .catch((err)=>{
                res.json({"error":err});
        });
})

router.delete('/:postId',(req,res)=>{
    Post.deleteOne({_id:req.params.postId})
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json({"error":err});
    })
});

//update
router.patch('/:postId',(req,res)=>{
    
    Post.updateOne({_id : req.params.postId},
                    {$set : {title : req.body.title}})
                    .then((response)=>{
                        res.json(response);
                    })
                    .catch((err)=>{
                        res.json({"error":err});
                    })
})

module.exports=router;