angular.module('myApp.directives', [])
  .directive('myAwesomeDirective', ['api', function(api) {
    //Do any one-time directive initialization work here
    return {
      priority : 10,
      terminal : false,
      template: '<div><h3>{{title}}</h3></div>',
      templateUrl : 'myDirective.html',
      replace : true,
      compile : function (element, attributes, transclude) {},
      link : function ($scope, $element, $attrs) {},
      scope : true,
      controller : function ($scope, $element, $attrs) {},
      require : 'myAwesomeDirective',
      transclude : true
    };
  }]);