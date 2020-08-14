const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema 
let QuestionSchema = new Schema({
    num: {
        type: String
    }, 
    
    question: { 
        type: String
    },
    
    yes: { 
        type: String
    },
    no: {
        type: String
    }, 
    result: {
        type: String 
    }, 
	score: {
		type: Array
	},

}) 
module.exports = mongoose.model('Question', QuestionSchema)