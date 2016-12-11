var Usuario = require('./models/usuario.js');
var Transacao = require('./models/transacao.js');
module.exports = function(app) {

    app.post('/api/pos/venda', function(req, res) {

        var transacao = new Transacao({ telefone: req.body.telefone, valor: req.body.valor });
        transacao.save();
        res.send(transacao._id);
    });

    app.post('/api/pos/resultado', function(req, res) {
        res.status(400).json({ confirmado: "OK" });
    });
};

// Usuario.findOne({ 'telefone': req.body.telefone }, function (err, user) {
//     if (user) {
//         res.status(200).send();
//     }
//     res.status(200).send();
// });

