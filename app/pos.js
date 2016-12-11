module.exports = function (app) {

    app.post('/api/pos/sale', function (req, res) {

        console.log("POS Inicio Venda");
        console.log(req.body);
        console.log("POS Venda");

        res.status(200).send();
    });
};
