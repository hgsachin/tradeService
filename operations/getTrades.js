const { metal_trades } = require('../dbConnector/metalTradeModel');

const fetchTrades = (query, cb) => {
    if (!query || query == '') {
        cb('Please select a Trade to display');
    } else {
        metal_trades.findOne({ '_id': query }, (err, trades) => {
            if (err) {
                cb('Error while fetching trades');
            } else {
                cb(undefined, trades);
            }
        });
    }
}

module.exports = { fetchTrades };