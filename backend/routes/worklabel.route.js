const express = require("express");
const router = express.Router();
const {
  getAllWorkLabelbyId,
  getAllWorkLabels,
  createWorkLabel,
  deleteWorkLabel,
  updateWorkLabel,
} = require("../controllers/workflowlabel.controller");

router.get("/", getAllWorkLabels);
router.get("/:id", getAllWorkLabelbyId);
router.post("/", createWorkLabel);
router.delete("/:id", deleteWorkLabel);
router.put("/:id", updateWorkLabel);

module.exports = router;
