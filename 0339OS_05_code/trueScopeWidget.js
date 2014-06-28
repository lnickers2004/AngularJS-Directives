angular.module('myApp', [])
	.directive('myScopedDirective', function() {
	  return {
	    scope : true,
	    link : function ($scope, $element, $attrs) {
	      $scope.setDirectiveTitle = function (title) {
	        $scope.title = title;
	      };
	    }
	  };
	});