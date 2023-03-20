// Variables d'environnement
require('dotenv').config();

// Les dépendances
const express = require('express');
const error404 = require('./src/middleware/error/404.js');
const log = require('./src/middleware/admin/log'); // infos log visiteurs
const userConnect = require('./src/middleware/admin/userConnect');
const sessionMiddleware = require('./src/middleware/session');

// Les routers
const mainRouter = require('./src/routers/mainRouter');
const userRouter = require('./src/routers/userRouter')
const adminRouter = require('./src/routers/adminRouter');

// Création de l'application
const app = express();

// Setup view engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Setup de la logique de session
app.use(sessionMiddleware);

// Setup du profil de connexion
app.use(userConnect);

// Setup du dossier static
app.use(express.static('public')); // fichiers statique

// Setup body parser
app.use(express.urlencoded({ extended: true }));  // Lecture du payload

// Setup de l'enregistrement des log
// app.use(log); // Décommenter pour utiliser l'enregistrement des log


// ===---- Routes ----===
app.use(mainRouter);
app.use(userRouter);
app.use(adminRouter);

// ===---- 404 ----===
app.use(error404);


//Lancement de l'application
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
});
