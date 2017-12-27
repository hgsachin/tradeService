const { metal_trades } = require('../dbConnector/metalTradeModel');

const updateTrade = (id, body, cb) => {
    if (!body || !id) {
        cb('Cannot insert empty trade object');
    }
    metal_trades.findByIdAndUpdate(id, { $set: body }, { new: true }).then((trade) => {
        cb(undefined, trade);
    }).catch((err) => {
        cb(err);
    })
}

module.exports = { updateTrade };