/**
 * Created by ojj on 09.05.2017.
 */
angular.module('demo', [])
    .controller('Hello', function($scope, $http) {
        $http.get('http://localhost:8080/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
    });