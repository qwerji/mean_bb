const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    content: {
        type: String,
        required: true,
        minlength: 10
    },
    desc: {
        type: String
    },
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps: true})

mongoose.model('Question', QuestionSchema)
