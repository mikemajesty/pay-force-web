var Usuario = require('./models/usuario.js');

module.exports = function(app) {

    app.get('/api/mobile/usuario', function(req, res) {
        Usuario.findOne({ telefone: req.query.telefone }, function(err, user) {
            if (user) {
                res.send(user);
                doc.name = 'jason borne';
                doc.visits.$inc();
                doc.save();
            }
            res.status(400).send(user);
        });
    });
};
