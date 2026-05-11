const { v2: cloudinary } = require('cloudinary');
const formidable = require('formidable');
const mongoose = require('mongoose');
const Candidat = require('../models/candidat');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    await connectDB();

    const form = formidable({ multiples: true, maxFileSize: 5 * 1024 * 1024 });
    const [fields, files] = await form.parse(req);

    const get = (v) => (Array.isArray(v) ? v[0] : v);
    const photoFiles = [files.photos].flat().filter(Boolean);

    const uploads = await Promise.all(
      photoFiles.map((f) =>
        cloudinary.uploader.upload(f.filepath, { folder: 'mode-motion' })
      )
    );

    await new Candidat({
      nom: get(fields.nom),
      prenom: get(fields.prenom),
      age: get(fields.age),
      sexe: get(fields.sexe),
      email: get(fields.email),
      telephone: get(fields.telephone),
      instagram: get(fields.instagram),
      photos: uploads.map((r) => r.secure_url),
    }).save();

    res.status(200).json({ message: 'Candidature enregistrée avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports.config = { api: { bodyParser: false } };
