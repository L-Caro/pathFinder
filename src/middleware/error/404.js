const error404 = function(req, res){
    res.status(404).render('error/404');
};

module.exports = error404;
