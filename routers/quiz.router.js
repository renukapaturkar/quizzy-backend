const express = require('express');
const router = express.Router();
const {Quiz} = require('../models/quiz.model.js');
const {data} = require('../data.js');


// Quiz.insertMany(data)

router.route('/')
.get(async(req,res)=> {
	try {
		const quizzesData = await Quiz.find({});
		if(!quizzesData){
			res.status(404).json({success: false, message: "The data is not found"})
		}else{
			res.status(200).json({success: true, data: quizzesData});
		}
		
	}catch(error){
		res.status(500).json({success: false, message: "Internal Server error", errorMessage: error.message});
	}
});

router.route('/:quizid')
.get(async(req,res)=> {
	const {quizid} = req.params;

	try {
		const quizData = await Quiz.findOne({id:quizid });
		data.__v = undefined;
		res.status(200).json({success: true, data:quizData});
	}catch(error){
		res.status(500).json({success: false, message: "Internal Server Error", errorMessage: error.message})
	}
});


module.exports = router;