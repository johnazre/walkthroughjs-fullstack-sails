angular.module('WalkthroughJS').directive('codeBlock', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: "templates/codeBlock.html",
    link: function(scope, element, attrs, ctrl, transclude) {
      transclude(scope.$parent, function(clone, scope) {
        element.append(clone);
      });
    }
  }
})
