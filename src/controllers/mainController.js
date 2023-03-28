const { Trek } = require("../models/index");
const path = require('path');
const fs = require("fs");

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
                    attributes: ['name'],
                    through: { attributes: [] },
                }
            ]
        });
        try {
           res.render('home', { treks, meta: "Accueil" });
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    }
};


module.exports = mainController;
