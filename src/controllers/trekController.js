const { Trek } = require("../models/index");
const path = require('path');
const fs = require("fs");

const trekController = {
    async renderOneTrek(req, res) {
        const id = req.params.id;
        const trek = await Trek.findByPk(id, {
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
        try {
            const photosfields = path.join(__dirname, `../../public/images/assets/${id}/XS`); // id en dynamique
            fs.readdir(photosfields, (err, files) => {
                if (err) {
                    console.trace(err);
                    return res.status(500).send('Erreur lors de la récupération des photos')
                }
                console.log(JSON.stringify(trek, null, 2));
            res.render('trek', { trek, photos: files }); // Envoie à la page EJS de la variable files| Trek c'est les infos écrites
        });
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    },
};





module.exports = trekController;