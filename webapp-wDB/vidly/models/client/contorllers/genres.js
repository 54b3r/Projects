const myApp = angular.module('myApp').controller('GenreController', [$scope, $http, $location, $routeParams, ()=> {
    console.log('Genre Controller loaded...');
    $scope.getGenre = () => {
        $http.get('/api/genres').success((response) => {
            $scope.genres = response
        });
    }
}]);