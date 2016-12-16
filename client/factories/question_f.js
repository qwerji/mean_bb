app.factory('question_factory', function($http) {
    let factory = {};

    factory.add_question = function(new_question, cb) {
        $http.post('/add_question', new_question).then(function(output) {
            cb()
        })
    }

    factory.get_all_questions = function(cb) {
        $http.get('/get_all_questions').then(function(output) {
            cb(output.data)
        })
    }

    factory.get_question = function(id, cb) {
        $http.get('/get_question/' + id.id).then(function(output) {
            cb(output.data)
        })
    }

    return factory;
})
