require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "default secret key";

exports.generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1m" });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
};
