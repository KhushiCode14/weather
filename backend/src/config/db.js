import mongoose from "mongoose";
//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/weatherApi";
const ConnectDB = () => {
  try {
    mongoose.connect(mongoDB);
    //Get the default connection
    const db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default ConnectDB;
