app.controller('session_controller', function($scope, session_factory, $location) {
    session_factory.get_curr_user(function(user) {
        if (!user) {
            $location.url('/login')
        }
        else {
            $scope.curr_user = user;
            if ($location.url() == '/login') {
                $location.url('/dash')
            }
        }
    })
    $scope.login = function() {
        if (!$scope.new_user || !$scope.new_user.name) {
            $scope.error = 'Please enter a name.'
        }
        else {
            session_factory.login($scope.new_user, function(user) {
                $scope.new_user = {};
            })
        }
    }
})
