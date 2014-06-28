angular.module('myApp', [])
	.directive('postHeader', function () {
	  var tpl = '<div class=”post-header”></div>';
	  return {
	    template : tpl,
	    replace : true,
	    restrict : 'C',//We're attaching ourselves to the classname 'post-header' here
	    transclude : 'element',//We want the whole element, not just the content
	    controller : function ($scope, $element, $attrs, $transclude) {
	      $transclude(function (clone) {
	        //clone is our transcluded element, in this case the h2 tag, fully compiled and ready for use
	        clone.removeClass('post-header');// this class is on our main directive element now
	        var title = clone.find('.title').text();
	        var dateEl = clone.find('.date').hide();//Start hidden
	        var authorEl = clone.find('.author').hide();
	        // Now insert them all in where we want them
	        $element
	          .append(dateEl)
	          .append('<h2 class="title">'+title + '</h2>')
	          .append(authorEl);
	      });
	      //When a user scrolls down to our element, reveal author and date
	      $element.waypoint(function () {
	        $element.find('.date, .author').fadeIn();
	      });
	    }
	  }
	});