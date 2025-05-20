const express = require("express");

const router = express.Router();

const { signupUser } = require("../controllers/userauth.controller");
const { loginUser } = require("../controllers/userauth.controller");
const {authMiddleware} = require("../middleware/auth.middleware");

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "This is home", user: req.user });
});

module.exports = router;
