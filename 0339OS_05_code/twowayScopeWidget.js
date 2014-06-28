angular.module('myApp', [])
	.directive('myScopedDirective', function() {
	  return {
	    scope : {
	      'title' : '@msdTitle',
	      'subtitle' : '=msdSubtitle'
	    },
	    link : function ($scope, $element, $attrs) {
	      $scope.setDirectiveTitle = function (title) {
	        $scope.title = title;
	      };
	      $scope.setDirectiveSubtitle = function (subtitle) {
	        $scope.subtitle = subtitle;
	      };
	    }
	  };
	});