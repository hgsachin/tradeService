const mongoose = require('mongoose');

const getMongoose = (dbName) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useMongoClient: true });
    return mongoose;
}

module.exports = { getMongoose };