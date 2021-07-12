const router = require("express").Router();
const db =  require('../connection/database');
const bcrypt = require("bcrypt");
const saltRounds = 10;

// router.use('/user', require('./user.routes'));
router.post("/user/register", (req, res) => {
  const name = req.body.name;
  const telephone = req.body.telephone;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    const sqlInsert =
      "INSERT INTO farmer(name,telephone,email,password) VALUES(?,?,?,?);";
    db.query(sqlInsert, [name, telephone, email, hash], (err, result) => {
      if (result) {
        res.send({ message: "successful" });
      }
      // console.log(result.data)
    });
  });
});


//login
router.post('/user/login',(req,res)=>{
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
                    console.log(token)
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




module.exports = router;
