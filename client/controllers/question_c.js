app.controller('question_controller', function($scope, question_factory, $location, $routeParams){
    $scope.add_question = function() {
        if (!$scope.new_question || !$scope.new_question.content) {
            alert("Please enter a question.")
        }
        else if ($scope.new_question.content.length < 10) {
            alert("Question must be longer than 10 characters.")
        }
        else {
            question_factory.add_question($scope.new_question, function() {
                $scope.new_question = {};
                $location.url('/dash')
            })
        }
    }
    question_factory.get_all_questions(function(questions) {
        $scope.questions = questions;
    })
    question_factory.get_question($routeParams, function(question) {
        $scope.question = question;
    })
})
