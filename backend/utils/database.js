const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected Sucessfully");
  } catch (error) {
    console.error("Database connection failed", error.message);
    throw new Error("Database Connection failed");
  }
};

module.exports = connectToDb;
