const WorkflowSchema = require("../models/workflow.model");

exports.saveWorkflow = async (req, res) => {
  const { nodes, edges } = req.body;
  const workLabelId = req.params.id; // fix param name

  try {
    let workflow = await WorkflowSchema.findOne({ workLabelId }); // fix method name

    if (workflow) {
      workflow.nodes = nodes;
      workflow.edges = edges;
    } else {
      workflow = new WorkflowSchema({
        workLabelId,
        nodes,
        edges,
      });
    }

    await workflow.save();
    res.status(200).json({ message: "Workflow Saved" });
  } catch (error) {
    console.error("Error in saveWorkflow:", error); // helpful log
    res.status(500).json({ message: "Error Saving Workflow", error });
  }
};

exports.getWorkflowById = async (req, res) => {
  try {
    const workflow = await WorkflowSchema.findOne({
      workLabelId: req.params.id,
    });

    res.status(200).json(workflow || { nodes: [], edges: [] });
  } catch (error) {
    console.error("Error in getWorkflowById:", error);
    res.status(500).json({ message: "Error Fetching Workflow", error });
  }
};
