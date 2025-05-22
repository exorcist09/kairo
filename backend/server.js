require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectToDb = require("./utils/database");
const userRoutes = require("./routes/userauth.route");
const workspaceRoute = require("./routes/worklabel.route");
const workflowRoute = require("./routes/workflow.route");

const PORT = process.env.PORT || 8000;
const server = express();

connectToDb();

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // agar cookies/auth use kar rahe ho toh
  })
);
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server is running with MongoDB");
});

server.use("/api/auth", userRoutes);
server.use("/workspace", workspaceRoute);
server.use("/workflow", workflowRoute);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
