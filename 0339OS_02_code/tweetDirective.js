angular.module('myApp', [])
  .directive('tweet', ['api', function (api) {
    return function ($scope, $element, $attributes) {
      $scope.retweet = function () {
        // Each scope inherits from it's parent, so we still have access to the full tweet object of { author : '…', text : '…' }
        api.retweet($scope.tweet);
      };
      $scope.reply = function () {
        api.replyTo($scope.tweet);
      };
    }
  }]);