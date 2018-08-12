app.directive('birdAddToCoop', function() {
  return {
    restrict: 'E',
    scope: {
      info: "="
    },
    templateUrl: 'js/directives/birdAddToCoop.html'
  };
})
