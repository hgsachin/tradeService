const expect = require('expect');

const { insertTrade } = require('../operations/insertNewTrade');
const { fetchTrades } = require('../operations/getTrades');
const { fetchAllTrades } = require('../operations/getAllTrades');
const { updateTrade } = require('../operations/updateTrade');
const { removeTrade } = require('../operations/deleteTrade');

describe('Trade Operations', () => {
    describe('Get All Trades', () => {
        it('should not contain error', (done) => {
            fetchAllTrades((err, docs) => {
                expect(err).toBeFalsy();
                done(err);
            });
        });
        it('should contain documents', (done) => {
            fetchAllTrades((err, docs) => {
                expect(docs).toBeTruthy();
                done();
            });
        });
    });
    
    describe('Get Trades(query)', () => {
        it('should not contain error', (done) => {
            fetchTrades('5a3d10b4f1c7c6076cf6ed62', (err, docs) => {
                expect(err).toBeFalsy();
                done(err);
            });
        });
        it('should contain document', (done) => {
            fetchTrades('5a3d10b4f1c7c6076cf6ed62', (err, docs) => {
                expect(docs).toBeTruthy();
                done();
            });
        });
    });
});