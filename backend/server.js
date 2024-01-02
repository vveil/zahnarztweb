const express = require("express");
const bodyParser = require("body-parser");
const formidable = require("formidable");
const multer = require("multer");
const cors = require("cors");

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

app.post(
  "/api/application",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "transcript", maxCount: 1 },
  ]),
  function (req, res) {
    const cvFile = req.files["cv"] ? req.files["cv"][0] : null;
    const transcriptFile = req.files["transcript"]
      ? req.files["transcript"][0]
      : null;

    if (!cvFile || !transcriptFile) {
      return res
        .status(400)
        .json({ message: "Both CV and Transcript files are required" });
    }

    // Access file properties
    console.log("CV Original Name: ", cvFile.originalname);
    console.log("CV Path: ", cvFile.path);
    console.log("Transcript Original Name: ", transcriptFile.originalname);
    console.log("Transcript Path: ", transcriptFile.path);
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: err.message });
      }
      // fields object contains the name and email
      console.log("Received name: ", fields.name);
      console.log("Received surname: ", fields.surname);
      console.log("Received email: ", fields.email);
      console.log("stelle", fields.stelle);
      console.log("cv: ", fields.cv);
      console.log("transcript: ", fields.transcript);
      // files object contains the uploaded files
      console.log("Received files: ", files);
      res.send("POST request to the endpoint");
    });
  }
);

app.post(
  "/upload",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "transcript", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files); // contains information about the uploaded files
    res.sendStatus(200);
  }
);

app.listen(PORT, () =>
  console.log(`Example app is listening on port ${PORT}.`)
);
