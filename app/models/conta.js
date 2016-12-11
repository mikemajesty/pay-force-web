var mongoose = require('mongoose');

module.exports = mongoose.model('Conta', {
    banco: {type: String, default: ''},
    bandeira: {type: String, default: ''},
    numero: {type: String, default: ''},
    expiracao: {type: String, default: ''}
});