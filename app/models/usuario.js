var mongoose = require('mongoose');
var Movimento = require('./movimento');
var Conta = require('./conta');

module.exports = mongoose.model('User', {
    nome: {type: String, default: ''},
    telefone: {type: String, default: ''},
    valor: {type: Number, default: 0},
    movimentos: { type : Array , "default" : [] },
    contas: { type : Array , "default" : [] }
});