var Usuario = require('./models/usuario.js');

module.exports = function (app) {

    app.get('/api/mobile/usuario', function (req, res) {
        console.log('req.query.telefone', req.query.telefone);
        Usuario.findOne({ telefone: req.query.telefone }, function (err, user) {
            if (user) {
                res.status(user).send();
            }
            res.status(400).send(user);
        });
    });
};
