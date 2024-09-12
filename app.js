const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./routes");

dotenv.config();

const app = express();

// Cors option
const corsOptions = {
  origin: ["http://localhost:8080", "https://hydro-contract.vercel.app"],
  optionsSuccessStatus: 200,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

// Middleware
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://alexander:123archi123@archivisioncluster.bsycs.mongodb.net/ArchiVisionDB?retryWrites=true&w=majority&appName=ArchiVisionCluster"
  )
  .then(() =>
    console.log(
      `Connecté à la base de données: ${mongoose.connection.host}`.bgGreen.bold
    )
  )
  .catch((error) =>
    console.error(`Error connecting to MongoDB: ${error.message}`)
  );

app.use("/proxy", (req, res) => {
  const url = "https://mokombati-backend-family.vercel.app" + req.url;
  req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api ArchiVision" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api ArchiVision" });
});

module.exports = app;
