const mysql = require("mysql");
require("dotenv").config();

// Aqui nos conectamos a la base de datos
// nota => para manejar la conexion usarmos pool

const pool = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_NAME,
});

module.exports = pool;
