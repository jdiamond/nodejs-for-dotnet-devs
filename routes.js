module.exports.sayHello = function (req, res) {
    var name = req.body.name;

    res.send('Hello, ' + name + '!');
};

var models = require('./models');

module.exports.createPerson = function(req, res) {
    var person = new models.Person({
        name: req.body.name,
        age: 99,
        retired: true
    });

    person.save(function(err) {
        if (err) {
            res.send(500, err);
        } else {
            res.send('Thanks!');
        }
    });
};
