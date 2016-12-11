var Usuario = require('./models/usuario.js');
var Transacao = require('./models/transacao.js');

module.exports = function(app) {

    app.get('/api/mobile/usuario', function(req, res) {
        Usuario.findOne({ 'telefone': req.query.telefone }, function(err, user) {
            if (!err) {
                user.movimentos.reverse();
                res.send(user);
            } else {
                res.status(404).send();
            }
        });
    });

    app.get('/api/mobile/confirmar', function(req, res) {
        Transacao.findById(req.query.transacao, function(err, trans) {
            if (!err) {
              trans.status = "S";
              trans.save();

              Usuario.findOne({ 'telefone': trans.telefone }, function(e, usuario) {
                  usuario.valor -= trans.valor;
                  usuario.movimentos.push({
                    data: Date.now(),
                    descricao: 'Lojinha CodeForce',
                    valor: trans.valor,
                    categoria: 'Varejo'
                  });
                  usuario.save();

                  res.status(200).send();
              });
            } else {
                res.status(404).send();
            }
        });
    });

    app.get('/api/mobile/recusar', function(req, res) {
        Transacao.findById(req.query.transacao, function(err, tras) {
            if (!err) {
              tras.status = "N";
              tras.save();

              res.status(200).send();
            } else {
                res.status(404).send();
            }
        });
    });

    app.get('/api/mobile/transacao', function(req, res) {
        Transacao.find({ 'telefone': req.query.telefone, 'status': 'I' }, function(err, trans) {
            if (trans.length > 0) {
                res.status(200).send(trans[0]);
            } else {
                res.status(200).send();
            }
            
        });
    });
};
