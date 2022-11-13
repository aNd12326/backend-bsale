const mysql = require("mysql");
require("dotenv").config();

// Here we connect to our db
// note => to handle the connection I used pool

const pool = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_NAME,
});

module.exports = { pool };
