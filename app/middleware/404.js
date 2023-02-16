const handler404 = function(req, res){
    res.status(404).render('404', {
        headTitle: 'Page Not Found',
    });
};

module.exports = handler404;
