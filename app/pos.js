var Usuario = require('./models/usuario.js');

module.exports = function (app) {

    app.post('/api/pos/venda', function (req, res) {

        Usuario.findOne({ 'telefone': req.body.telefone }, function (err, user) {
            if (user) {
                res.status(200).send();
            }
            res.status(404).send();
        });

    });

    app.post('/api/pos/resultado', function (req, res) {
       res.status(400).json({confirmado: "OK"});
    });
};
