const express = require("express");
const router = express.Router();

const {
  saveWorkflow,
  getWorkflowById,
} = require("../controllers/workflow.controller");

router.post("/save/:id", saveWorkflow);
router.get("/save/:id", getWorkflowById);

module.exports = router;
