angular.module('myApp', [])
	.directive('myScopedDirective', function() {
	  return {
	    scope : {
	      'title' : '@msdTitle'
	    },
	    link : function ($scope, $element, $attrs) {
	      $scope.setDirectiveTitle = function (title) {
	        $scope.title = title;
	      };
	    }
	  };
	});