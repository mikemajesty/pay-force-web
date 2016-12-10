var mongoose = require('mongoose');

module.exports = mongoose.model('Movimento', {
    data: {type: Date, default: Date.now},
    descricao: {type: String, default: ''},
    valor: {type: Number, default: 0}
});