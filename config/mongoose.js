const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://gautampandey076:OycD2jqinvRXgk5e@cluster0.ewuhkwa.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
