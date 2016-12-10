var mongoose = require('mongoose');
var Movimento = require('./movimento');

module.exports = mongoose.model('User', {
    numero: {type: String, default: ''},
    movimentos: [Movimento]
});