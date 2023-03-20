const { Trek } = require("../models/index");

const mainController = {
    async homePage(req, res){
        try {
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
                console.log(JSON.stringify(trek, null, 2));
            res.render('home', { trek });
        } catch (error) {
            console.trace(error);
            res.status(500).render("error/500");
        }
    }
};


module.exports = mainController;
