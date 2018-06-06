const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(($routeProvider, $controllerProvider) => {
    $controllerProvider.register('MoviesController')
    $routeProvider.when('/', {
        controller: 'MoviesController',
        template: 'views/movies.html',
    })
     .when('movies', {
        controller: 'MoviesController',
        template: 'views/movies.html',
    })
    .when('/movies/details/:_id', {
        controller: 'MoviesController',
        template: 'views/movie_details.html',
    })
    .when('/movies/add', {
        controller: 'MoviesController',
        template: 'views/add_movie.html',
    })
    .when('/movies/edit/:_id', {
        controller: 'MoviesController',
        template: 'views/edit_movie.html',
    })
    .otherwise({
        redirectTo: '/'
    });
});