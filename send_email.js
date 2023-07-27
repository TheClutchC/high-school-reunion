const nodemailer = require('nodemailer');
require('dotenv').config();

// Sets the passkey
const passKey = process.env.PASS_KEY;

// Set the sender's email address
const senderEmail = process.env.SENDER_EMAIL;

// Set the recipient's email address
const recipientEmail = process.env.RECIPIENT_EMAIL;

// Set the email's subject line
const subjectLine = process.env.SUBJECT_LINE;

// Create the HTML content for the email (paste the modified HTML code here)
const emailContent = process.env.EMAIL_CONTENT;

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Your SMTP server address (e.g., smtp.gmail.com for Gmail)
  port: 587, // Port number for your SMTP server usually 587
  secure: false, // Set to true if using SSL/TLS, otherwise, false
  auth: {
    user: senderEmail, // Your email address for authentication
    pass: passKey, // Your email password or app password
  },
});

// Set the email options
const mailOptions = {
  from: senderEmail, // Sender's name and email address
  to: recipientEmail, // Recipient's email address
  subject: subjectLine, // Email subject
  html: emailContent, // Email content as HTML.
  attachments: [
    {
      filename: 'RBHS1958v1.pdf',
      path: '\RBHS1958v1.pdf',
    },
    {
      filename: 'RBHS1958v2.pdf',
      path: '\RBHS1958v2.pdf',
    },
  ],
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Failed to send the email:', error);
  } else {
    console.log('Email sent successfully!', info);
  }
});