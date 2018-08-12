app.directive('birdInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
  templateUrl: 'js/directives/birdInfo.html'
  };
});
