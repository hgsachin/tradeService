const { metal_trades } = require('../dbConnector/metalTradeModel');

const fetchAllTrades = (cb) => {
    metal_trades.find((err, trades) => {
        if (err) {
            cb('Error while fetching trades');
        } else {
            cb(undefined, trades);
        }
    });
}

module.exports = { fetchAllTrades };