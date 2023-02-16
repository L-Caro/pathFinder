const controller = {
    homePage(req, res){
        res.render('index', {
            headTitle: 'Blog rando',
        });
    },

};


module.exports = controller;
