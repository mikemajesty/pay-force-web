var Usuario = require('./models/usuario.js');
var Transacao = require('./models/usuario.js');

module.exports = function(app) {

    app.get('/api/mobile/usuario', function(req, res) {
        Usuario.findOne({ 'telefone': req.query.telefone }, function(err, user) {
            if (!err) {
              res.send(user);
            }
            res.status(400);
        });
    });

    app.get('/api/mobile/confirma', function(req, res) {
        Transacao.findOne({ 'telefone': req.query.telefone }, function(err, tras) {
            if (!err) {
              tras.status = "S";
              tras.save();
              res.send(user);
            }
            res.status(tras);
        });
    });
};
