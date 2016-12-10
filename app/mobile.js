module.exports = function (app) {

    app.post('/api/mobile/venda', function(req, res) {

        console.log("Post Inicio Venda");
        console.log(req.body);
        console.log("Post Venda");

        res.status(200).send();
    });

     app.post('/api/mobile/confirmar', function(req, res) {

        console.log("Post Inicio Confirmar");
        console.log(req.body);
        console.log("Post Confirmar");

        res.status(200).send();
    });

     app.post('/api/mobile/negacao', function(req, res) {

        console.log("Post Inicio Negação");
        console.log(req.body);
        console.log("Post Negação");

        res.status(200).send();
    });
};
