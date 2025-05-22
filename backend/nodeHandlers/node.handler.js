require("dotenv").config();
const nodemailer = require("nodemailer");
const userModel = require("../models/user.model");

// DelayNode
const handleDelayNode = async (data) => {
  const milisecond = data.delayInMinutes * 60 * 1000;
  return new Promise((resolve) => setTimeout(resolve, milisecond));
};

// Email Node
const handleEmailNode = async (node) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Payment Node
const paymentHandleNode = async (data) => {
  // dummy placeholder for now
  // TODO: -> cahnage it to specific data after the user links their account
  console.log("Processing Payment");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { status: "success", transactionId: "txn_123456789" };
};

module.exports = { handleDelayNode, handleEmailNode, paymentHandleNode };
