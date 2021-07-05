const express=require('express');
const app=express();
///
const bodyParser=require('body-parser');
const cors=require('cors');
///
const mysql=require('mysql');

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

    const sqlInsert="INSERT INTO farmer(name,telephone,email) VALUES(?,?,?);";
    db.query(sqlInsert,[name,telephone,email],(err,result)=>{

       // res.send('hello world1');
       console.log(result.data)
    })

   
})

app.listen(3001,()=>{
    console.log("running port 3001");
})