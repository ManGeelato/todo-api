const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

// importing routes
const todoRoutes = require("./routes/todoRoutes");

const app = express();
//use express to get data in json format
app.use(express.json());
app.use(cors());

// app listens on port we have specified
const PORT = process.env.PORT || 8080;

// mongoDB connection
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  ).catch((err) => console.error(err.message));


app.use("/", todoRoutes);