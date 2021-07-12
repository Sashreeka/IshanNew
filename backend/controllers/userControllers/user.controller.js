const db =  require('../../connection/database');
const bcrypt = require("bcrypt");

exports.findUser = (req, res) => {
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
};
