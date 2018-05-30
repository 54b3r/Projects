const myApp = angular.module('myApp').controller('MoviesController', [$scope, $http, $location, $routeParams, () => {
    console.log('Movies Controller loaded....');
    $scope.getMovies = () => {
        $http.get('/api/movies').success((response) => {
            $scope.movies = response; 
        });
    }   
}]);
