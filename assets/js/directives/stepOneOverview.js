angular.module('WalkthroughJS').directive('stepOneOverview', function () {

  return {
    restrict: 'E',
    templateUrl: 'templates/stepOneOverview.html',
    transclude: true,
    link: function(scope, element, attrs, ctrl, transclude) {

      transclude(scope.$parent, function(clone, scope) {
        element.append(clone);
      });
    },

  };


});
