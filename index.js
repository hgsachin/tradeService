const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const { insertTrade } = require('./operations/insertNewTrade');
const { fetchTrades } = require('./operations/getTrades');
const { updateTrade } = require('./operations/updateTrade');
const { removeTrade } = require('./operations/deleteTrade');

const service = express();
service.use(bodyParser.json());

service.post('/trade', (req, res) => {
    insertTrade(req.body.trade, (err, doc) => {
        if (err) {
            res.send(`An error accured while inserting trade details : ${err}`);
        } else {
            res.send(`Trade details successfully inserted with id ${doc._id}`);
        }
    });
});

service.get('/trades/:id', (req, res) => {
    fetchTrades(req.params.id, (err, doc) => {
        if (err) {
            res.send(`An error occured while getting trade : ${err}`);
        } else {
            res.send(`Trade details successfully fetched :\n ${doc}`);
        }
    });
});

service.put('/trade/:id', (req, res) => {
    var id = req.params.id;
    var body = req.body;
    updateTrade(id, body.trade, (err, doc) => {
        if (err) {
            res.send(`An error occured while inserting trade details : ${err}`);
        } else {
            res.send(`Trade details successfully updated :\n ${doc}`);
        }
    });
});

service.delete('/trade/:id', (req, res) => {
    var id = req.params.id;
    removeTrade(id, (error, trade) => {
        if (error) {
            res.send(`Error while deleting trade : ${error}`);
        } else {
            res.send(`Deleted trade : ${trade}`);
        }
    });
});

const tradeServer = http.createServer(service);

tradeServer.listen(3040, () => {
    console.log('Trade Server started on 3040');
});