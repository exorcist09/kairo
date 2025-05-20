const express = require("express");
const router = express.Router();
const {
  getAllWorkLabelbyId,
  getAllWorkLabels,
  createWorkLabel,
  deleteWorkLabel,
} = require("../controllers/workflowlabel.controller");

router.get("/", getAllWorkLabels);
router.get("/:id", getAllWorkLabelbyId);
router.post("/", createWorkLabel);
router.delete("/:id", deleteWorkLabel);

module.exports = router;