angular.module('WalkthroughJS').directive('stepThreeOverview', function () {

  return {
    restrict: 'E',
    templateUrl: 'templates/stepThreeOverview.html',
    transclude: true,
    link: function(scope, element, attrs, ctrl, transclude) {

      transclude(scope.$parent, function(clone, scope) {
        element.append(clone);
      });
    },
  }
});
