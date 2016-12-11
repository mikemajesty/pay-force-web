var Usuario = require('./models/usuario.js');

module.exports = function(app) {

    app.get('/api/mobile/usuario', function(req, res) {
        Usuario.findOne({ 'telefone': req.query.telefone }, function(err, user) {
            if (!err) {
                console.log('user', user);
                user.status = 'S';
                user.visits.$inc();
                user.save();
                res.send(user);
            }
            res.status(400);
        });
    });
};
