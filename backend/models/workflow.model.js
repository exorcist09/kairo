const mongoose = require("mongoose");

const WorkflowSchema = new mongoose.Schema({
  workLabelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkLabel",
    required: true,
  },
  nodes: {
    type: Array,
    default: [],
  },
  edges: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
