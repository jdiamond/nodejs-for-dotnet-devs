var mongoose = require('mongoose');

module.exports.Person = mongoose.model('Person', {
    name: String,
    age: Number,
    retired: Boolean
});
