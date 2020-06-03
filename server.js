const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectionDB = require("./config/db");

//import environment file
dotenv.config({
  path: "./config/config.env",
});


// Connect to Database
connectionDB();

//import the route files
const bootcamps = require("./routes.js/bootcamps");


// initalize express
const app = express();

//Body Parser
app.use(express.json())

//
// const logger = require('./middleware/logger')

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


//mount Routes
app.use("/api/bootcamps", bootcamps);

//mount errorHandler
app.use(errorHandler);


//initializing port
const PORT = process.env.PORT || 5000;



//log the url and method
const server = app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled rejections

process.on("unhandledRejection", (error, promise) => {
  console.log(`Erro: ${error.message}`.red.bold);

});