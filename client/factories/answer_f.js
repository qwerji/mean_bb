app.factory('answer_factory', function($http) {
    let factory = {};

    factory.add_answer = function(new_answer, q_id, cb) {
        let answer_pkg = {
            answer: new_answer,
            q_id: q_id
        }
        $http.post('/add_answer', answer_pkg).then(function(output) {
            cb()
        })
    }

    factory.like = function(id, cb) {
        let id_pkg = {
            id: id
        }
        $http.post('/like', id_pkg).then(function(output) {
            cb()
        })
    }

    return factory;
})
