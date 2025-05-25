const mongoose = require("mongoose");

const WorkflowSchema = new mongoose.Schema({
  workLabelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkLabel",
    required: true,
  },
  nodes: {
    type: Array,
    default: [
      {
        id: String,
        type: String, // like "emailNode"
        data: Object, // data related to node (e.g., email body)
        position: Object,
      },
    ],
  },
  edges: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
