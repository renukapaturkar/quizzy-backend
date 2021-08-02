const express = require('express');
const mongoose = require('mongoose');

const {Schema} = mongoose;


const QuizSchema = new Schema({
	id: String,
	quizName:String,
	questions:[{
		questionNo:String,
		question:String,
		options: {type: Array, text:String, isRight:Boolean},
		points:Number
	}]
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = {Quiz}