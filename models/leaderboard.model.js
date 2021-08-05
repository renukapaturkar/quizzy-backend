const express = require('express');
const mongoose = require('mongoose');

const {Schema} = mongoose;

const LeaderBoardSchema = new Schema({
	name:String,
	quizname:String,
	score:Number

})

const LeaderBoard = mongoose.model("Leaderboard", LeaderBoardSchema);


module.exports = {LeaderBoard}