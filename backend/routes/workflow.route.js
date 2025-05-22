const express = require("express");
const router = express.Router();

const {
  saveWorkflow,
  getWorkflowById,
  executeWorkflow,
  executeWorkflowById,
} = require("../controllers/workflow.controller");

router.post("/save/:id", saveWorkflow);
router.get("/save/:id", getWorkflowById);

router.post("/executeworkflow", executeWorkflow);
router.post("/executeworkflow/:id", executeWorkflowById);

module.exports = router;
