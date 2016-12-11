var Usuario = require('./models/usuario');

module.exports = function (app) {

    app.get('/registrar', function(req, res) {
        res.render('registrar');
    });

    app.post('/registrar', function(req, res) {
        Usuario.findOne({telefone: req.body.telefone}, function(err, usuario) {
            if (usuario === null) {
                Usuario.create({
                    nome: req.body.nome, 
                    telefone: req.body.telefone,
                    valor: 500.00,
                    contas: [
                        {
                            bandeira: 'visa',
                            numero: 3782,
                            expiracao: '12/19'
                        },
                        {
                            bandeira: 'mastercard',
                            numero: 4513,
                            expiracao: '11/20'
                        }
                    ],
                });
            }

            res.render('registro_completo');
        });
    });
};
