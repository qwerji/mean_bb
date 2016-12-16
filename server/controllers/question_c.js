const mongoose = require('mongoose'),
    Answer = mongoose.model('Answer'),
    Question = mongoose.model('Question'),
    User = mongoose.model('User');

module.exports = (function() {
    return {
        add_question: function(req, res) {
            let new_question = new Question(req.body)
            if (!new_question.validateSync()) {
                new_question.save()
                res.json({status: true})
            }
            else {
                res.json({status: false})
            }
        },
        get_all_questions: function(req, res) {
            Question.find({}, function(err, questions) {
                res.json(questions)
            })
        },
        get_question: function(req, res) {
            Question.findOne({_id: req.params.id})
                .populate('_answers')
                .exec(function(err, question) {
                    res.json(question)
                })
        },
        add_answer: function(req, res) {
            req.body.answer.content = `${req.session.user.name} answered: '${req.body.answer.content}'`;
            req.body.answer.likes = 0;
            let new_answer = new Answer(req.body.answer)
            if (!new_answer.validateSync()) {
                Question.findOne({_id: req.body.q_id}, function(err, question) {
                    question._answers.push(new_answer._id)
                    new_answer.save()
                    question.save()
                    res.json({status: true})
                })
            }
            else {
                res.json({status: false})
            }
        },
        like: function(req, res) {
            Answer.findOne({_id: req.body.id}, function(err, answer) {
                answer.likes += 1
                answer.save()
                res.json({status: true})
            })
        }
    }
})()
