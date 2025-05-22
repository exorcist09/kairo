const topologicalSort = require("../engine/workflowEngine");
const WorkflowSchema = require("../models/workflow.model");
const { handleDelayNode, handleEmailNode, paymentHandleNode } = require("../nodeHandlers/node.handler");

exports.saveWorkflow = async (req, res) => {
  const { nodes, edges } = req.body;
  const workLabelId = req.params.id;

  try {
    let workflow = await WorkflowSchema.findOne({ workLabelId }); 

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
    console.error("Error in saveWorkflow:", error); 
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

// for runnning nodes in the workspace
exports.executeWorkflow = async (req, res) => {
  try {
    const { nodes, edges, nodeData } = req.body;
    //ye data body se aayega jisme nodes with random level store honge
    console.log("Received Workflow:,", { nodes, edges, nodeData });

    // passign it to topologicalsort function in order to get the sorted level taki pata chal saki ki kon si node phele perform karni
    const sortedNodes = topologicalSort(nodes, edges);
    console.log("Topological sorting done workflow:,", { sortedNodes });

    // execution of nodes in order
    for (const nodeId of sortedNodes) {
      const node = nodeData[nodeId];
      console.log("Executing Node:", nodeId, node);
      await exports.executeNode(node);
    }
    res.status(200).json({ message: "Workflow Executed Sexxessfully" });
  } catch (error) {
    console.error("Error in execution of workflow", error.message, error.stack);
    res
      .status(500)
      .json({
        message: "Error in Executing Workflow",
        error: error.message,
        stack: error.stack,
      });
  }
};

exports.executeNode = async (node) => {
  // if else conditons
  const { type, data } = node;
  switch (type) {
    case "DelayNode":
      await handleDelayNode(data);
      break;
    case "EmailNode":
      await handleEmailNode(data);
      break;
    case "PaymentNode":
      await paymentHandleNode(data);
      break;
    default:
      console.log("No Handler defined for this nodetype ");
  }
};

exports.executeWorkflowById = async (req, res) => {
  try {
    const workflowId = req.params.id;
    const workflow = await WorkflowSchema.findById(workflowId);
    if (!workflow) {
      return res.status(404).json({ message: "Workflow not found" });
    }
    const { nodes, edges, nodeData } = workflow;
    const sortedNodes = topologicalSort(nodes, edges);
    // execution of nodes in order
    for (const nodeId of sortedNodes) {
      const node = nodeData[nodeId];
      await exports.executeNode(node);
    }
    res.status(200).json({ message: "Workflow executed Successfully" });
  } catch (error) {
    console.loge("error in execution of this workflow", error);
    res.status(500).json({ message: "Execution Failed", error });
  }
};
