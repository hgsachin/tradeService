const mongoose = require('mongoose');

const DB_URL = 'mongodb://admin:admin@ds133597.mlab.com:33597/' || process.env.DB_URL || 'mongodb://localhost:27017/';

const getMongoose = (dbName) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(`${DB_URL}${dbName}`, { useMongoClient: true });
    return mongoose;
}

module.exports = { getMongoose };