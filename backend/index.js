const express=require('express');
const app=express();
const mysql=require('mysql');

const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "shashreeka",
});



app.get('/',(req,res)=>{

    const sqlInsert="INSERT INTO farmer(name,telephone,email) VALUES('ishan97','0718610084','ishan97@gmail.com');";
    db.query(sqlInsert,(err,res)=>{

        res.send('hello world1');
    })

   
})

app.listen(3001,()=>{
    console.log("running port 3001");
})