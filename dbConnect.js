const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { ServerApiVersion } = require("mongodb");

module.exports = async () => {
  const mongoUri = process.env.MONGO_URI;
  try {
    const connect = await mongoose.connect(mongoUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    // console.log(error);
    // If the connection is not Happen with mongodb the simply exit.
    process.exit(1);
  }
};
