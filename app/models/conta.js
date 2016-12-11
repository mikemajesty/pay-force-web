var mongoose = require('mongoose');

module.exports = mongoose.model('Conta', {
    banco: {type: String, default: ''},
    bandeira: {type: String, default: ''}
});