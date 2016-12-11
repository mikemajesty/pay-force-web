var Usuario = require('./models/usuario.js');

module.exports = function (app) {

    app.get('/api/mobile/usuario', function (req, res) {

        Usuario.findOne({ 'telefone': req.query.telefone }, function (err, user) {
            if (user) {
                res.status(user).send();
            }
            res.status(404).send();
        });
    });
};
