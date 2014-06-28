angular.module('myApp', [])
	.directive('myScopedDirective', function() {
	  return {
	    scope : false, // we could leave this out, since it's the default
	    link : function ($scope, $element, $attrs) {
	      $scope.setDirectiveTitle = function (title) {
	        $scope.title = title;
	      };
	    }
	  };
	});