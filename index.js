const express = require('express');
const cors = require('cors');
const PORT = 3000;


const app = express();
app.use(express.json());
app.use(cors());


const quiz = require('./routers/quiz.router.js');
const leaderboard = require('./routers/leaderboard.router.js');

const {initializeDBConnection}  = require('./db/db.connect.js');
initializeDBConnection();


app.use('/quiz', quiz)
app.use('/leaderboard', leaderboard)


app.get('/',(req,res)=>res.send("API for Quizzy - Quiz App"));


app.listen(PORT, ()=>console.log(`Quizzy app listening at http://localhost:PORT`));