// email.js

const nodemailer = require("nodemailer");

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "pteclwvn",
    pass: "rPj4gyqObXAh",
  },
});

module.exports = transporter;