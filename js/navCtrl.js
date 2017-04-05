app.controller('navCtrl', function($scope, $http) {
    
    $http.get(API + "destinations-include/" + versusID)
    .then(function(response) {
        $scope.destinations = response.data;
    });

    $http.get(API + "services-product/" + versusID + '/Excursion')
    .then(function(response) {
        $scope.excursions = response.data;
    });

    $http.get(API + "services-product/" + versusID + '/Package')
    .then(function(response) {
        $scope.packages = response.data;
    });
});