const { metal_trades } = require('../dbConnector/metalTradeModel');

const insertTrade = (trade, cb) => {
    if (!trade) {
        cb('Cannot insert empty trade object');
    }
    var newMetalTrade = new metal_trades({
        trade_date: trade.date,
        commodity_id: trade.commodity_id,
        side: trade.side,
        counterparty_id: trade.counterparty_id,
        price: trade.price,
        qty: trade.qty,
        location_id: trade.location_id
    });
    console.log(newMetalTrade);
    newMetalTrade.save().then((doc) => {
        cb(undefined, doc);
    }, (e) => {
        cb('Error while inserting new trade', e);
    });
}

module.exports = { insertTrade };