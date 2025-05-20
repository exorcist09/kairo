const mongoose = require("mongoose");

const WorkSpaceSchema = new mongoose.Schema(
  {
    id: String,
    title: { type: String, required: true },
    description: { type: String }, // optional string
    status: "pending" | "in-progress" | "completed",
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workspace", WorkSpaceSchema);
