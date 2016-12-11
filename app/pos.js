var Usuario = require('./models/usuario.js');
var Transacao = require('./models/transacao.js');
module.exports = function(app) {

    app.post('/api/pos/venda', function(req, res) {
        var transacao = new Transacao({ telefone: req.body.telefone, valor: req.body.valor });
        transacao.save(function(err, data) {
            if (err) console.log(err);
            else console.log('Saved : ', data);
        });
        res.send(transacao._id);
    });

    app.get('/api/pos/resultado', function(req, res) {
        Transacao.findById(req.query.id, function(err, trans) {
            if (trans == null)
                res.send("Usuário não encontrado");
            else if (trans.status !== "I")
                res.send(trans.status);
            else
                res.send(400);
        });
    });
};

