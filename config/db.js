const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

const connectionDB = async () => {
  const conn = await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  console.log(
    `Mongo DB connection Sucessful connected to: ${conn.connection.host}`.cyan
      .underline.bold
  );
};

module.exports = connectionDB;
