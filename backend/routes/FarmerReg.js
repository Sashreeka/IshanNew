const express=require('express');
const db=require('../connection');

const router=express.Router();
const mysql=require('mysql');

const bcrypt=require('bcrypt');
//const { response } = require('express');
const saltRounds=10;





router.post('/api/register',(req,res)=>{

    const name=req.body.name
    const telephone=req.body.telephone
    const email=req.body.email
    const password=req.body.password

    bcrypt.hash(password,saltRounds, (err,hash)=>{
        if(err)
        {
            console.log(err);
        }

        const sqlInsert="INSERT INTO farmer(name,telephone,email,password) VALUES(?,?,?,?);";
        db.query(sqlInsert,[name,telephone,email,hash],(err,result)=>{
    
           if(result)
           {
            res.send({message:'successful'});
           }
          // console.log(result.data)
        })
        
    })

   

   
})


module.exports=router;