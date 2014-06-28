angular.module('myApp',[])
	.controller('MainCtrl', function ($scope) {
		$scope.playerList = [
      { "name" : "Babe Ruth", "team" : "Yankees" },
      { "name" : "Jackie Robinson", "team" : "Dodgers" },
      { "name" : "Hank Aaron", "team" : "Braves" }
    ];
	});