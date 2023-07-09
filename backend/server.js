const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();
// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure multer to store uploaded files in a specific directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });



// API endpoint for form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email, message)

  // Validate the form data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a Nodemailer transport
  const transporter = nodemailer.createTransport({
    // Configure your email provider here
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'noreply.oscode@gmail.com',
      pass: 'rvduneonjhvkmjsl',
    },
  });

  // Configure the email parameters
  const mailOptions = {
    from: 'noreply.oscode@gmail.com',
    to: 'omar.saab.96@gmail.com',
    subject: 'New form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.json({ message: 'Email sent successfully' });
  });
});

app.post('/send-cv', upload.single('cv'), (req, res) => {
  // Extract form data from req.body
  const { name, email } = req.body;

  // Create a Nodemailer transport
  const transporter = nodemailer.createTransport({
    // Configure your email provider here
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'noreply.oscode@gmail.com',
      pass: 'rvduneonjhvkmjsl',
    },
  });

  // Compose the email
  const mailOptions = {
    from: 'noreply.oscode@gmail.com',
    to: 'omar.saab.96@gmail.com',
    subject: 'New CV Submission',
    text: `Name: ${name}\nEmail: ${email}`,
    attachments: [
      {
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
