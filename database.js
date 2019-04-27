const mongoose = require('mongoose');

connect()
.on('error',console.log)
.on('disconnect',connect)
.once('connected',listen);

function connect()
{
    var mongoDB = 'mongodb://localhost/csit_database';
    mongoose.connect(mongoDB,{useNewUrlParser: true});
    return mongoose.connection;
}