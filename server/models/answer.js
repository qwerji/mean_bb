const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let AnswerSchema = new Schema({
    content: {
        type: String,
        required: true,
        minlength: 5
    },
    details:{
        type: String,
    },
    likes: {
        type: Number
    }
},{timestamps: true})

mongoose.model('Answer', AnswerSchema)
