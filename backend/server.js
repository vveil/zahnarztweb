const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

require("dotenv").config();

function secureDelete(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        return reject(err);
      }

      const fileSize = stats.size;
      const randomData = crypto.randomBytes(fileSize);
      fs.writeFile(filePath, randomData, (err) => {
        if (err) {
          return reject(err);
        }

        fs.unlink(filePath, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  });
}

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({ origin: ["http://localhost:3000", "https://zahnarzt.niklas.ai"] }),
);

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
    user: process.env.GOOGLE_APP_ACC,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

app.post(
  "/api/application",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "transcript", maxCount: 1 },
  ]),
  async function (req, res) {
    const cvFile = req.files["cv"] ? req.files["cv"][0] : null;
    const transcriptFile = req.files["transcript"]
      ? req.files["transcript"][0]
      : null;

    if (!cvFile || !transcriptFile) {
      return res
        .status(400)
        .json({ message: "Both CV and Transcript files are required" });
    }

    // Access non-file fields from req.body
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const stelle = req.body.stelle;
    const datenConsent = req.body.datenConsent;

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
        <p>Nachname: ${surname}</p>
        <p>Email: ${email}</p>
        <p>Stelle: ${stelle}</p>
        <p>${name} ${surname} stimmt der Verarbeitung der Daten im Sinne des Bewerbungsprozesses zu: ${datenConsent}</p>
      `,
      attachments: [
        { filename: cvOriginalName, path: cvPath },
        { filename: transcriptOriginalName, path: transcriptPath },
      ],
    };

    try {
      // Send email
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            console.log("Email sent:", info.response);
            resolve(info);
          }
        });
      });

      // Securely delete files
      await secureDelete(cvPath);
      console.log("CV file securely deleted");

      await secureDelete(transcriptPath);
      console.log("Transcript file securely deleted");

      res.send("POST request to the endpoint");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
);

app.listen(PORT, () => console.log(`backend is listening on port ${PORT}.`));
