const express = require("express");
const dotenv = require("dotenv");

//import environment file
dotenv.config({ path: "./config/config.env" });

//initializing port
const PORT = process.env.PORT;
// initalize express
const app = express(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
