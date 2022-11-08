const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/product");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Api working on port ", process.env.PORT);
});
