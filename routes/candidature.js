const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Candidat = require("../models/candidat");

// Configuration du stockage des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // vers le dossier "uploads"
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route POST pour enregistrer les données du candidat et les fichiers
router.post("/", upload.array("photos", 5), async (req, res) => {
  try {
    const { nom, prenom, age, sexe, email, telephone, instagram } = req.body;

    // Enregistre les noms des fichiers (facultatif, mais utile)
    const photoFilenames = req.files.map((file) => file.filename);

    const candidat = new Candidat({
      nom,
      prenom,
      age,
      sexe,
      email,
      telephone,
      instagram,
      photos: photoFilenames, // si tu veux ajouter cette propriété dans le modèle
    });

    await candidat.save();

    // Réponse simple pour le JS (pas de redirection ici)
    res.status(200).json({ message: "Candidature enregistrée avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
