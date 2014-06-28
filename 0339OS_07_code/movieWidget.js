angular.module('myApp', [])
	.directive('movieInfo', function () {
	  return {
	    template : '<div class=”movie-info”>' +
	      '<h1 class=”movie-title”>{{name}}</h1>' +
	      '<img class=”movie-poster” ng-src=”posters/{{name}}.jpg” />' +
	      '<div ng-transclude></div>' +
	    '</div>',
	    transclude : true,
	    scope : {
	      'name' : '=movieInfo'
	    }
	  }
	});