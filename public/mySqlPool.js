const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "123456"
});

 connection.connect(function(err){
    if (err) {
      return console.error("Error: " + err.message);
    }
    else{
      console.log("The connection to the MySQL server was successfully established");
    }
 });
 
 connection.end(function(err) {
  if (err) {
    return console.log("Error: " + err.message);
  }
  console.log("Connection is over");
});