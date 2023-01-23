const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/categories");

const dbConnect = require("./db/dbConnect");

const port = 8000;

dotenv.config();
app.use(express.json());
app.use(cors());

dbConnect(process.env.MONGO_DB);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.use("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file upload succefully");
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
