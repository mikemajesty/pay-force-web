var Usuario = require('./models/usuario');

module.exports = function (app) {

    app.get('/registrar', function(req, res) {
        res.render('registrar');
    });

    app.post('/registrar', function(req, res) {
        Usuario.create({
            nome: req.body.nome, 
            telefone: req.body.telefone,
            valor: 100.00
        });

        res.render('registro_completo');
    });
};
