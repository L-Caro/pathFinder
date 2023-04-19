const { Trek } = require("../models/index");


const bookmarkController = {
        async renderBookmarkPage(req, res) {
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
        const user = req.locals.user;
        try {
            res.render("admin/bookmark", {user, treks, meta: "Favoris"});
        } catch (error) {
            console.trace(error)
            res.status(500).send("Impossible d'afficher la page");
        }
    },
    // async addOnBookmark(req, res) {
    //     const id = Number(req.params.id);
    //     try {
    //         if (res.locals.user) { // Si l'utilisateur est connecté
    //         if (!req.user.bookmark){
    //             req.user.bookmark = [];
    //         }
    //         if (!req.user.bookmark.includes(id)){
    //         req.user.bookmark.push(id);
    //     }
    //     res.redirect('/bookmark')
    //     } else { // Si l'utilisateur n'est pas connecté
    //         res.redirect(`/trek/${id}`, { errorMessage: "Vous devez être connecté pour ajouter un trek à vos favoris" })
    //     }} catch (error) {
    //         console.trace(error)
    //         res.status(500).send("Impossible d'afficher la page");
    //     }},
    async addOnBookmark(req, res) {
        const id = Number(req.params.id);
        console.log(res.locals.user);
        try {
            if (!res.locals.user) { // Si l'utilisateur n'est pas connecté
                return res.status(401).render('error', {message: "Vous devez être connecté pour ajouter un trek à vos favoris"});
            }
    
            if (!req.user.bookmark){
                req.user.bookmark = [];
            }
    
            if (!req.user.bookmark.includes(id)){
                req.user.bookmark.push(id);
            }
    
            res.redirect('/bookmark')
        } catch (error) {
            console.trace(error)
            res.status(500).send("Impossible d'afficher la page");
        }
    },    
    deleteFromBookmark(req, res) {
        const id = Number(req.params.id);
        const index = req.user.bookmark.indexOf(id);
        if (index > -1) {
          req.user.bookmark.splice(index, 1);
          }
          res.redirect('/bookmark');
        }
};



module.exports = bookmarkController;
