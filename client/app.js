const app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'session_controller'
        })
        .when('/dash', {
            templateUrl: 'partials/dash.html',
            controller: 'session_controller'
        })
        .when('/new_question', {
            templateUrl: 'partials/new_question.html',
            controller: 'session_controller'
        })
        .when('/show_question/:id', {
            templateUrl: 'partials/show_question.html',
            controller: 'session_controller'
        })
        .when('/new_answer/:id', {
            templateUrl: 'partials/new_answer.html',
            controller: 'session_controller'
        })
        .otherwise('/login')
})
