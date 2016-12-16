app.factory('session_factory', function($http, $location) {
    let factory = {};

    factory.login = function(new_user, cb) {
        $http.post('/login', new_user).then(function(output) {
            cb(output.data)
            $location.url('/dash')
        })
    }

    factory.get_curr_user = function(cb) {
        $http.get('/get_curr_user').then(function(output) {
            cb(output.data)
        })
    }

    return factory;
})
