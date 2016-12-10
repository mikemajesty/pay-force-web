var mongoose = require('mongoose');

module.exports = mongoose.model('Cartao', {
    banco: {type: String, default: ''},
    bandeira: {type: String, default: ''}
});