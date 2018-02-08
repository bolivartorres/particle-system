angular.module('app.controllers')
.controller('simulations', ['$scope', function($scope) {
    $scope.play = true;
    $scope.simulation = "leaves";
    $scope.pauseSimulation = function(){
        $scope.play = $scope.play === true ? false : true;
    };
    $scope.toggleSimulation = function(){
        $scope.simulation = $scope.simulation === "snow" ? "leaves" : "snow";
    };
}]);