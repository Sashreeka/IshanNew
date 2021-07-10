const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
///
const bodyParser=require('body-parser');
const cors=require('cors');
///
const mysql=require('mysql');

const bcrypt=require('bcrypt');
const { response } = require('express');
const saltRounds=10;

const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "shashreeka",
});

///
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

///



app.post('/api/register',(req,res)=>{

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

app.post('/api/login',(req,res)=>{
    const telephone=req.body.telephone;
    const password=req.body.password;
    const sqlSelect="SELECT * FROM farmer WHERE telephone=?";
    db.query(sqlSelect,telephone,
        (err,result) => {

        if(err){
            res.send({err: err});
        }

        if(result.length > 0){
           // res.send(result);
          // res.send(result);
           bcrypt.compare(password, result[0].password, (error,response)=>{
               if(response){
                // res.send(result);
                 console.log(result[0].telephone);

                 const payload={
                     "telephone":result[0].telephone,
                 }

                 jwt.sign(payload,'secret',{expiresIn:'10h'},(err,token)=>{
                    res.json({
                        token: token,
                    })
                 })
                  
               }else{
                res.send({message:"Wrong username/Password combination"});
               }
           })
         
        }else{
            
            res.send({message:"User doesn't exist"});
        }

    })
})

app.listen(3001,()=>{
    console.log("running port 3001");
})