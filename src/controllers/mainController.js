const { Trek } = require("../models/index");
const { Sequelize } = require('sequelize');


const mainController = {
    async homePage(req, res){
                const treks = await Trek.findAll({
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
                    attributes: ['name', 'id'],
                    through: { attributes: [] },
                }
            ],
            order: Sequelize.literal('random()') // Tri aléatoire sur la page d’accueil
        });
        try {
            const successMessage = req.session.message;
            req.session.message = null;
            res.render('home', { treks, meta: "Accueil", successMessage});
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    }
};


module.exports = mainController;