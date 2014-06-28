angular.directive('autocompleteInput', function () {
  return {
    require : 'ngModel',
    link : function ($scope, $element, $attrs, ngModel) {
      ngModel.$render = function () {
        $element.val(ngModel.$viewValue || '');
      };

      $element.autocomplete({
        //Define source, etc
        select : function (ev, ui) {
          $scope.$apply(function() {
            ngModel.$setViewValue(ui.item.value);
          });
        }
      });
    }
  }
});