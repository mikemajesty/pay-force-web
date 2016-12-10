module.exports = function (app) {

    app.post('/api/pos/venda', function (req, res) {

        console.log("POS Inicio Venda");
        console.log(req.body);
        console.log("POS Venda");

        res.status(200).send();
    });
};
