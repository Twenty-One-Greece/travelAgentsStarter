app.controller('destinationCtrl', function($scope, $http, $routeParams) {
    
    $http.get(API + "destination-one/" + $routeParams.destinationID)
    .then(function(response) {
        $scope.destination = response.data;
    });

});