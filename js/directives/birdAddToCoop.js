app.directive('birdAddToCoop', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/birdAddToCoop.html',

    link: function(scope, element, attrs) {
      scope.buttonText = "Add to Coop",
      scope.added = false,

      scope.addToCoop = function() {
        element.toggleClass('btn-active')
        if(scope.added) {
          scope.buttonText = "Add to Coop";
          scope.added = false;
        } else {
          scope.buttonText = "Remove from Coop";
          scope.added = true;
        }
      }
    }
  };
})
