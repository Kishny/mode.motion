# Mode & Motion – Site de Book d'Agence de Mannequins

Ce projet est un site professionnel pour une agence de mannequins appelée **Mode & Motion**. Il présente des modèles féminins et masculins avec des pages individuelles, un formulaire de candidature, un backend Express avec MongoDB, et une interface multilingue (FR, EN, ES, IT).

## ✨ Fonctionnalités principales

- Présentation de modèles avec pages individuelles
- Formulaire de candidature avec upload photo
- Base de données MongoDB (via Mongoose)
- API Express
- Multilingue avec JSON (FR, EN, ES, IT)
- Optimisation CSS/JS/images (`npm run optimize`)
- Compression Gzip (via Express + compression)

## 📁 Structure du projet

├── public/ # Fichiers frontend (HTML, CSS, JS, images)
│ ├── img/
│ ├── img-webp/
│ ├── styles/
│ └── js/
├── uploads/ # Dossier des photos candidates
├── routes/ # API Express (ex: candidature)
├── lang/ # Traductions multilingues JSON
├── server.js # Serveur principal
├── package.json # Dépendances & scripts
├── .env # Variables (ex: URI MongoDB)
└── README.md

## ⚙️ Installation

````bash
git clone https://github.com/votre-utilisateur/mode-motion.git
cd mode-motion
npm install

🚀 Commandes utiles
Commande	Description
npm run dev	Lancer le serveur avec nodemon
npm start	Lancer le serveur sans hot reload
npm run optimize	Minifie CSS/JS, convertit les images en WebP et démarre le serveur

🧪 Audit Lighthouse
✅ SEO > 90

✅ Accessibilité > 85

✅ Best Practices = 100

🟡 Performance : dépend du poids des images → optimisé avec npm run optimize

🧩 Technologies utilisées
HTML5 / CSS3 / JavaScript

Node.js + Express

MongoDB + Mongoose

Multer (upload photo)

i18n avec JSON statique

imagemin / cleancss / uglify-js

compression Gzip

📩 Contact développeur
Jean VOLCY – Jeyko.dev
📧 contact.jeyko.dev@gmail.com
📍 Tours (France)

🔐 Licence
Projet sous licence ISC


---

## 🇬🇧 ENGLISH VERSION — `README.md`

```markdown
# Mode & Motion – Modeling Agency Portfolio Website

This project is a professional portfolio site for a modeling agency called **Mode & Motion**. It displays male and female models with individual pages, a photo application form, Express backend with MongoDB, and a multilingual interface (FR, EN, ES, IT).

## ✨ Key Features

- Individual model presentation pages
- Application form with image upload
- MongoDB database (via Mongoose)
- Express.js backend API
- Multilingual content with JSON (FR, EN, ES, IT)
- CSS/JS/Image optimization (`npm run optimize`)
- Gzip compression via Express

## 📁 Project Structure

├── public/ # Frontend files (HTML, CSS, JS, images)
│ ├── img/
│ ├── img-webp/
│ ├── styles/
│ └── js/
├── uploads/ # Uploaded candidate photos
├── routes/ # API endpoints (e.g. candidature)
├── lang/ # Multilingual JSON translation files
├── server.js # Main server file
├── package.json # Dependencies & scripts
├── .env # Environment variables (e.g. Mongo URI)
└── README.md


## ⚙️ Installation

```bash
git clone https://github.com/your-username/mode-motion.git
cd mode-motion
npm install


🚀 Available Scripts
Command	Description
npm run dev	Launch server with nodemon
npm start	Launch server normally
npm run optimize	Minifies CSS/JS, converts images to WebP, then starts the server

🧪 Lighthouse Audit
✅ SEO: 90+

✅ Accessibility: 85+

✅ Best Practices: 100

⚠️ Performance: depends on image weight → optimized with npm run optimize

🧩 Tech Stack
HTML5 / CSS3 / JavaScript

Node.js + Express.js

MongoDB + Mongoose

Multer (image uploads)

i18n with static JSON files

imagemin / cleancss / uglify-js

Gzip compression

📩 Developer Contact
Jean VOLCY – Jeyko.dev
📧 contact.jeyko.dev@gmail.com
📍 Tours, France

🔐 License
This project is under ISC License
````
