const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const connectionDB = require('./config/db')

//import environment file
dotenv.config({
  path: "./config/config.env",
});

connectionDB();

//import the route files
const bootcamps = require("./routes.js/bootcamps");

const app = express();

//dev logging middleware

//
// const logger = require('./middleware/logger')



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(logger);

app.use("/api/bootcamps", bootcamps);

//log the url and method

//initializing port
const PORT = process.env.PORT || 5000;
// initalize express

const server = app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled rejections

process.on('unhandledRejection', (error, promise) => {
  console.log(`Erro: ${error.message}`)

  //close server and exit process

  process.close(() => process.exit(1))
})