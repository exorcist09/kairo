const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
  },
  { timestamps: true } //for mongoose to add createdAt and updatedAt automatically 
);

module.exports = mongoose.model("User", UserSchema);
