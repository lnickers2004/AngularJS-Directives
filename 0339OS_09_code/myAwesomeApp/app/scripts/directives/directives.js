angular.module('myApp')
  .directive('playerWidget', function () {
    //Define our template for the widget
    var tpl = '<div class="player-widget">' +
      '<p class="player" ng-repeat="p in players" ng-click="activate(p)" ng-class="{highlighted : p.active}">' +
        '{{p.name}} <span class="team" ng-show="p.team">({{p.team}})</span>' +
      '</p>' +
    '</div>';
    return {
      template : tpl,
      scope : {
        'players' : '=playerWidget'//Declare our two-way binding, and nothing else
      },
      link : function ($scope, $element, $attrs) {
        $scope.activate = function (p) {
          p.active = true;
        }
      }
    }
  });