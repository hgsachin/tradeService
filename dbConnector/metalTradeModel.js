const { getMongoose } = require('./mongooseConnector');

const mongoose = getMongoose('TradeDB');

var tradeSchema = new mongoose.Schema({
    trade_date: {
        type: Date,
        default: Date.now
    },
    commodity_id: {
        type: String,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    counterparty_id: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    location_id: {
        type: String,
        required: true
    }
});

const metal_trades = mongoose.model('metal_trade', tradeSchema);

module.exports = { metal_trades };