var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reactLogin',{useNewUrlParser:true});

const db = mongoose.connection;

db.on('erros', (err)=>{
    console.log('connection error',err);
});

db.once('open', ()=>{
    console.log('connected');
});

module.exports = mongoose;