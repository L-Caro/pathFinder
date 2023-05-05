// Variables d'environnement
require('dotenv').config();

// Les dépendances
const express = require('express');
const middlewares = require('./src/middleware/index');

// Les routers
const router = require('./src/routers');

// Création de l'application
const app = express();

// Setup view engine
app.set('views', './src/views');
app.set('view engine', 'ejs');


// Setup du dossier static
app.use(express.static('public')); // fichiers statique

// Setup body parser
app.use(express.urlencoded({ extended: true }));  // Lecture du payload


// ===---- Routes ----===
app.use(router.main);

// ===---- 404 ----===
app.use(middlewares.notFound);


//Lancement de l'application
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
});
