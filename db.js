const mongoose = require('mongoose');
const env = require('./env');
//connecting to DB
mongoose.connect(env.dbConnection)
    .then(() => console.log(`Connected to Mongo DB`))
    .catch((err) => console.error(`Coundn't connect to mongoDB` + err));


module.exports = mongoose;

