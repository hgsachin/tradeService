const { metal_trades } = require('../dbConnector/metalTradeModel');

const removeTrade = (id, callback) => {
    metal_trades.findByIdAndRemove(id).then((trade) => {
        if(!trade) {
            callback(`Couldn't find any trade with id ${id}`);
        } else {
            callback(undefined, trade);
        }
    }).catch((error) => {
        callback(error);
    });
}

module.exports = { removeTrade };