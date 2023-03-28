const { Trek } = require("../models/index");
const path = require('path');
const fs = require("fs");

const trekController = {
    async renderOneTrek(req, res) {
        const id = req.params.id;
        const session = req.session.bookmark;
        const trek = await Trek.findByPk(id, {
            attributes: ['id', 'name', 'time_length', 'distance', 'max_height', 'min_height', 'denivele', 'start_point', 'gps_coordonate', 'gpx', 'description', 'resume', 'boucle', 'map'],
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
            res.render('trek', { trek, photos: files, meta: trek.name, session }); // Envoie à la page EJS de la variable files| Trek c'est les infos écrites
        });
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    },
    async renderTrekPhotos(req, res) {
        const id = req.params.id;
        const trek = await Trek.findByPk(id, {
            attributes: ['id', 'name'],
            include: [
                {
                    association: 'tags',
                    attributes: ['name'],
                    through: { attributes: [] },
                }
            ]
        });
        try {
            const photosfields = path.join(__dirname, `../../public/images/assets/${id}/M`); // id en dynamique
            fs.readdir(photosfields, (err, files) => {
                if (err) {
                    console.trace(err);
                    return res.status(500).send('Erreur lors de la récupération des photos')
                }
            res.render('trekPhotos', { trek, photos: files, meta: 'Photos' }); // Envoie à la page EJS de la variable files| Trek c'est les infos écrites
        });
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    },
};





module.exports = trekController;