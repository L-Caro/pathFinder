const { Router } = require("express");
const userController = require("../controllers/admin/userController.js");


const router = Router();

// Gestion inscription/connexion
router.get('/signup', userController.renderSignupPage);
router.post('/signup', userController.actionSignup);

router.get('/login', userController.renderLoginPage);
router.post('/login', userController.actionLogin);

router.get('/logout', userController.actionLogout);

router.get('/profil', userController.renderProfilPage);


module.exports = router;