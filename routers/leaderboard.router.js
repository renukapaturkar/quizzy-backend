const express = require('express');
const router = express.Router();
const {LeaderBoard} = require('../models/leaderboard.model.js');


router.route('/')
.get(async(Req, res)=> {
	try {
		const data = await LeaderBoard.find({})
		if(!data){
			res.status(404).json({success: false, message: "Data not found"})
		}else{
			res.status(200).json({success: true, data: data})
		}

	}catch(error){
		res.status(500).json({success: false, message: "Internal Server Error", errMessage: error.message})
	}

})

.post(async(req, res)=> {
	const data = req.body;
	console.log(data)
	try{
		const newList = new LeaderBoard(data);
		console.log(newList, "newList")
		const data2 = await newList.save();
		res.status(200).json({success: true, data:data2})
	}catch(error){
		res.status(500).json({success: false, message: "Internal Server Error", errMessage: error.message})
	}
})


module.exports = router;