const mysql=require('mysql');
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "shashreeka",
});
module.exports = db;
