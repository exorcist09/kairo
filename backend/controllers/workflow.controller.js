const topologicalSort = require("../engine/workflowEngine");
const WorkflowSchema = require("../models/workflow.model");
const {
  handleDelayNode,
  handleEmailNode,
  paymentHandleNode,
} = require("../nodeHandlers/node.handler");

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

exports.executeWorkflow = async (req, res) => {
  try {
    const { nodes, edges } = req.body;

    console.log("Received Workflow:,", { nodes, edges });

    const sortedNodes = topologicalSort(nodes, edges);
    console.log("Topological sorting done workflow:,", { sortedNodes });

    // Create a map from node ID to node object
    const nodeMap = new Map();
    nodes.forEach((node) => nodeMap.set(node.id, node));

    for (const nodeId of sortedNodes) {
      const node = nodeMap.get(nodeId);
      if (!node) {
        console.warn(`Node with id ${nodeId} not found`);
        continue;
      }
      try{
        console.log("Executing Node:", nodeId, node);
        await exports.executeNode(node);
      }catch(error){
        console.log(`Error executing nodes`,err.message)
      }
    }
    res.status(200).json({ message: "Workflow Executed Successfully" });
  } catch (error) {
    console.error("Error in execution of workflow", error.message, error.stack);
    res.status(500).json({
      message: "Error in Executing Workflow",
      error: error.message,
      stack: error.stack,
    });
  }
};

exports.executeNode = async (node) => {
  const { type, data } = node;
  const nodeType = type.toLowerCase(); // normalize

  switch (nodeType) {
    case "delaynode":
      await handleDelayNode(data);
      break;
    case "emailnode":
      await handleEmailNode(data);
      break;
    case "paymentnode":
      await paymentHandleNode(data);
      break;
    default:
      console.log("No Handler defined for this node type:", nodeType);
  }
};

exports.executeWorkflowById = async (req, res) => {
  try {
    const workflowId = req.params.id;
    const workflow = await WorkflowSchema.findById(workflowId);
    if (!workflow) {
      return res.status(404).json({ message: "Workflow not found" });
    }

    const { nodes, edges } = workflow;
    const sortedNodes = topologicalSort(nodes, edges);

    const nodeMap = new Map();
    nodes.forEach((node) => nodeMap.set(node.id, node));

    for (const nodeId of sortedNodes) {
      const node = nodeMap.get(nodeId);
      if (!node) {
        console.warn(`Node with id ${nodeId} not found`);
        continue;
      }
      await exports.executeNode(node);
    }
    res.status(200).json({ message: "Workflow executed Successfully" });
  } catch (error) {
    console.error("Error in execution of this workflow", error);
    res.status(500).json({ message: "Execution Failed", error });
  }
};
