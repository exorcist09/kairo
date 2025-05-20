const mongoose = require("mongoose");

export default connectToDb = async () => {
  try {
    await mongoose.connect(process.nextTick.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected Sucessfully");
  } catch (error) {
    throw new Error("Database Connection failed", error.message);
  }
};
