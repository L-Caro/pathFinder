const { Trek } = require("../models/index");
const path = require('path');
const fs = require("fs");

const mainController = {
    async homePage(req, res){
        const trek = await Trek.findByPk(1, {
            include: [
                {
                    association: 'difficulty',
                    attributes: ['name'],
                },
                {
                    association: 'summit',
                    attributes: ['name'],
                },
                {
                    association: 'tags',
                    attributes: ['name'],
                    through: { attributes: [] },
                }
            ]
        });
        // === Gestion de la demande de l'affichage des photos ===
        // Il faut require fs et path en haut de la page
        const id = 4 // A remplacer par req.params.id le moment venu
        try {
            const photosfields = path.join(__dirname, `../../public/images/assets/${id}/XS`); // id en dynamique
            fs.readdir(photosfields, (err, files) => {
                if (err) {
                    console.trace(err);
                    return res.status(500).send('Erreur lors de la récupération des photos')
                }
        // === Fin de la gestion de l'affichage des photos ===
            res.render('home', { trek, photos: files }); // Envoie à la page EJS de la variable files| Trek c'est les infos écrites
        });
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    }
};


module.exports = mainController;
