module.exports = function (app) {

    app.get('/registrar', function(req, res) {
        res.render('registrar', {
            variavel: 'oi'
        });
    });
};
