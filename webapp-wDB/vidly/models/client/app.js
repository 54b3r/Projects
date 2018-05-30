const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(($routeProvider, $controllerProvider) => {
    $controllerProvider.register('MoviesController')
    $routeProvider.when('/', {
        controller: 'MoviesController',
        templateUrl: 'views/movies.html',
    })
     .when('/movies', {
        controller: 'MoviesController',
        templateUrl: 'views/movies.html',
    })
    .when('/movies/details/:_id', {
        controller: 'MoviesController',
        templateUrl: 'views/movie_details.html',
    })
    .when('/movies/add', {
        controller: 'MoviesController',
        templateUrl: 'views/add_movie.html',
    })
    .when('/movies/edit/:_id', {
        controller: 'MoviesController',
        templateUrl: 'views/edit_movie.html',
    })
    .otherwise({
        redirectTo: '/'
    });
});