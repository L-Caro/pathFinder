const handler404 = function(req, res){
    res.status(404).render('404');
};

module.exports = handler404;
