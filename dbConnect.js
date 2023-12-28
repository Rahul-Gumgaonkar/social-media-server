const mongoose = require("mongoose");

const { ServerApiVersion } = require("mongodb");

module.exports = async () => {
  const mongoUri = `mongodb+srv://rahul:KW8YDGsiofCd7RFI@cluster0.zjdpm1d.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

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
    console.log(error);
    // If the connection is not Happen with mongodb the simply exit.
    process.exit(1);
  }
};
