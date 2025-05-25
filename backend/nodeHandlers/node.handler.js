require("dotenv").config();
const nodemailer = require("nodemailer");
const userModel = require("../models/user.model");
const Stripe = require("stripe");

// DelayNode
exports.handleDelayNode = async (data) => {
  const delayMs = parseInt(data.delay) || 1000;
  await new Promise((resolve) => setTimeout(resolve, delayMs));
};

// Email Node
exports.handleEmailNode = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use Mailgun, SendGrid in production
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: data.from || process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    text: data.body,
  };

  await transporter.sendMail(mailOptions);
};

// // Payment Node
// const stripe = new Stripe(process.env.STRIPE_SECRET);
// exports.paymentHandleNode = async (data) => {
//   await stripe.paymentIntents.create({
//     amount: data.amount,
//     currency: "usd",
//     payment_method: data.paymentMethodId,
//     confirm: true,
//   });
// };
