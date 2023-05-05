const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createPool({
  host: process.env.Host,
  user: process.env.User,
  database: process.env.Database,
  password: process.env.Password,
  port: process.env.Port,
});
db.getConnection((error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql is connected sucessfully");
  }
});
module.exports = db.promise();
