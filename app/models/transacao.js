var mongoose = require('mongoose');

module.exports = mongoose.model('Transacao', {
    telefone: {type: String, default: ''},
    valor: {type: Number, default: ''},
    status: {type: String, default: undefined},
});