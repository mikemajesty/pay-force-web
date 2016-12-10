var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function (app) {

    app.post('/api/mobile/venda', function(req, res) {

        console.log("POS INICIO");
        console.log(req.body);
        console.log("POS VENDA");

        res.status(200).send();
    });
};
