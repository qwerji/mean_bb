const session = require('./../controllers/session_c'),
    question = require('./../controllers/question_c')

module.exports = function(app) {
    app.post('/login', session.login)
    app.get('/logout', session.logout)
    app.get('/get_curr_user', session.get_curr_user)
    app.post('/add_question', question.add_question)
    app.get('/get_all_questions', question.get_all_questions)
    app.get('/get_question/:id', question.get_question)
    app.post('/add_answer', question.add_answer)
    app.post('/like', question.like)
}
