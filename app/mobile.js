module.exports = function (app) {

    app.post('/api/mobile/venda', function(req, res) {

        console.log("POS INICIO");
        console.log(req.body);
        console.log("POS VENDA");

        res.status(200).send();
    });
};