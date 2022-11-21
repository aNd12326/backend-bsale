const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index");

dotenv.config();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Puerto (se declara en las variables de entorno)
const port = process.env.PORT;

// para tener acceso a todas las rutas
app.use("/api", routes);

// se levanta el servidor

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
