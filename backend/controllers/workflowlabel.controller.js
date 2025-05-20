const WorkLabelSchema = require("../models/workflowlabel.model");

exports.createWorkLabel = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newLabel = new WorkLabelSchema({ title, description });
    await newLabel.save();
    res.status(201).json(newLabel);
  } catch (error) {
    console.error("Error creating worklabel", error.message);
    res.status(500).json({ message: "Error Creating work Label" });
  }
};

exports.getAllWorkLabels = async (req, res) => {
  try {
    const labels = await WorkLabelSchema.find();
    res.json(labels);
  } catch (error) {
    console.error("Error fetching worklabels", error.message);
    res.status(500).json({ message: "Error Fetching workLabels" });
  }
};

exports.getAllWorkLabelbyId = async (req, res) => {
  try {
    const label = await WorkLabelSchema.findById(req.params.id);
    if (!label) {
      return res.status(404).json({ message: "WorkLabel not found" });
    }
    res.json(label);
  } catch (error) {
    console.error("Worklabel not found", error.message);
    res.status(500).json({ message: "Erro fetching Label" });
  }
};

exports.deleteWorkLabel = async (req, res) => {
  try {
    const deleteLabel = await WorkLabelSchema.findByIdAndDelete(req.params.id);
    if (!deleteLabel) {
      return res
        .status(404)
        .json({ message: "WorkLable not found, Hence cannot be deleted" });
    }
    res.status(200).json({ message: "WorkLabel deleted Sucessfully" });
  } catch (error) {
    console.error("Unable to delete worklabel", error.message);
    res.status(500).json({ message: "Unable to delete worklabel" });
  }
};
