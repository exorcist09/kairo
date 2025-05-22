const mongoose = require("mongoose");


const linkedAccountSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  data: { type: Object, required: true },
  linkedAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    linkedAccounts: [linkedAccountSchema],
  },

  { timestamps: true } //for mongoose to add createdAt and updatedAt automatically
);

module.exports = mongoose.model("User", UserSchema);
