angular.module('myApp', [])
	.controller('MainCtrl', function ($scope) {
		$scope.setAppTitle = function (title, subtitle) {
		  $scope.title = title;
		  $scope.subtitle = subtitle;
		}
	})
	.directive('myScopedDirective', function() {
	  return {
	    scope : {
	      'updateTitle' : '&msdUpdateTitle'
	    },
	    link : function ($scope, $element, $attrs) {
	      $scope.title = 'Lonely Directive';
	    }
	  };
	});