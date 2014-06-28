angular.module('myApp', [])
	.directive('timePicker', function () {
	  var today = new Date(new Date().toDateString());
	  return {
	    require : '?ngModel',
	    link : function ($scope, $element, $attrs, ngModel) {
	    	ngModel = ngModel || {
			    "$setViewValue" : angular.noop
			  }

			  var initialized = false;
			  setTimeout(function () {
			    initialized = $element.timepicker()
			      .on('changeTime', function (ev, ui) {
			        var sec = $element.timepicker('getSecondsFromMidnight')
			        ngModel.$setViewValue(sec * 1000);
			      });
			  });

			  ngModel.$render = function (val) {
			    if (!initialized) {
			      //If $render gets called before our timepicker plugin is ready, just return
			      return;
			    };
			    $element.timepicker('setTime', new Date(today.getTime() + val));
			  }
	    }
	  }
	});