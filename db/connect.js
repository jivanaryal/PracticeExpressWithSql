const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "crud_contact",
  password: "adminJivan",
  port: 3309,
});
db.getConnection((error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql is connected sucessfully");
  }
});
module.exports = db.promise();
