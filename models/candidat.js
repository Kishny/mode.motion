const mongoose = require("mongoose");

const CandidatSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  age: Number,
  sexe: String,
  email: String,
  telephone: String,
  instagram: String,
  photos: [String], // <- ici
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Candidat", CandidatSchema);
