angular.module('ScoreMagicApp.controllers', []).
controller('scoreController', function ($scope) {

    // starting life
    $scope.score = 20;
    
    $scope.scoreUp = function() {
        $scope.score++;
    };
    
    $scope.scoreDown = function() {
        $scope.score--;
    }
	
});