const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Ajender@950",
  database: "todolist",
});

module.exports = connection;
