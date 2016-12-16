app.controller('answer_controller', function($scope, answer_factory, $location, $route) {
    $scope.add_answer = function(q_id) {
        if (!$scope.new_answer || !$scope.new_answer.content) {
            alert('Please enter an answer.')
        }
        else if ($scope.new_answer.content.length < 5) {
            alert('Answer must be at least 5 characters.')
        }
        else {
            answer_factory.add_answer($scope.new_answer, q_id, function() {
                $scope.new_answer = {};
                $location.url('/dash')
            })
        }
    }
    $scope.like = function(id) {
        answer_factory.like(id, function() {
            $route.reload()
        })
    }
})
