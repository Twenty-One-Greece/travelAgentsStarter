app.controller('serviceCtrl', function($scope, $http, $routeParams) {
    
    $http.get(API + "service-one/" + $routeParams.serviceID)
    .then(function(response) {
        $scope.excursion = response.data;
    });

});