const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const candidatureRoute = require("./routes/candidature");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware globaux
app.use(compression()); // Active la compression Gzip
app.use(cors());
app.use(express.json());

// Statique : dossier public et uploads
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes API
app.use("/api/candidature", candidatureRoute);

// Connexion MongoDB + démarrage serveur
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connecté");
    app.listen(PORT, () =>
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ Erreur MongoDB :", err));
