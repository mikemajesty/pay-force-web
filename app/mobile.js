var Usuario = require('./models/usuario.js');

module.exports = function(app) {

    app.get('/api/mobile/usuario', function(req, res) {
        // Usuario.findOne({ telefone: req.query.telefone }, function (err, user) {
        //     if (user) {
        //         res.status(user).send();
        //     }
        //     res.status(400).send(user);
        // });
        Usuario.find({}, function(err, users) {
            var userMap = {};

            users.forEach(function(user) {
                userMap[user._id] = user;
            });

            res.send(userMap);
        });
    });
};
