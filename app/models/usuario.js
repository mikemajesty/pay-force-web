var mongoose = require('mongoose');
var Movimento = require('./movimento');
var Cartao = require('./cartao');

module.exports = mongoose.model('User', {
    numero: {type: String, default: ''},
    valor: {type: Number, default: 0},
    movimentos: [Movimento],
    cartoes: [Cartao]
});