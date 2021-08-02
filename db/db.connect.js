const mongoose = require('mongoose');


function initializeDBConnection() {
    mongoose.connect("mongodb+srv://renukapaturkar:Eloquence@3497@neog-cluster.fns0z.mongodb.net/Quizzy?retryWrites=true&w=majority", 
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("mongodb successfully connected"))
    .catch(error => console.error("mongodb connection failed... ", error))
}

module.exports = { initializeDBConnection }