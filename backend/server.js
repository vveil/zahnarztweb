const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder for uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original file name
  },
});
const upload = multer({ storage: storage });

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_APP_ACC, // Replace with your Gmail email address
    pass: process.env.GOOGLE_APP_PASSWORD, // Replace with your Gmail password
  },
});

app.post(
  "/api/application",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "transcript", maxCount: 1 },
  ]),
  function (req, res) {
    console.log("reached backend");
    const cvFile = req.files["cv"] ? req.files["cv"][0] : null;
    const transcriptFile = req.files["transcript"]
      ? req.files["transcript"][0]
      : null;

    if (!cvFile || !transcriptFile) {
      console.log("one file missing");
      return res
        .status(400)
        .json({ message: "Both CV and Transcript files are required" });
    }

    // Access non-file fields from req.body
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const stelle = req.body.stelle;

    // Access file properties
    const cvOriginalName = cvFile.originalname;
    const cvPath = cvFile.path;
    const transcriptOriginalName = transcriptFile.originalname;
    const transcriptPath = transcriptFile.path;

    // Construct email message
    const mailOptions = {
      from: "janniklas999777@gmail.com", // Replace with your Gmail email address
      to: "spam@niklas.ai", // Replace with the recipient's email address
      subject: "New Job Application",
      html: `
        <p>Name: ${name}</p>
        <p>Surname: ${surname}</p>
        <p>Email: ${email}</p>
        <p>Stelle: ${stelle}</p>
        <p>CV Original Name: ${cvOriginalName}</p>
        <p>CV Path: ${cvPath}</p>
        <p>Transcript Original Name: ${transcriptOriginalName}</p>
        <p>Transcript Path: ${transcriptPath}</p>
      `,
      attachments: [
        { filename: cvOriginalName, path: cvPath },
        { filename: transcriptOriginalName, path: transcriptPath },
      ],
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Internal server error" });
      } else {
        console.log("Email sent:", info.response);
        res.send("POST request to the endpoint");
      }
    });
  },
);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () =>
  console.log(`Example app is listening on port ${PORT}.`),
);
