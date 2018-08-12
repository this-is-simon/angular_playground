app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Coo';
  $scope.subtitle = 'The Pigeon Shop';
  $scope.birds = [
    {
	  name: 'Rock Dove',
  	price: 19,
    image: 'rock-dove'
  	},
    {
	  name: 'Collared Dove',
  	price: 1.45,
    image: 'collared-dove'
  	},
    {
	  name: 'Stock Dove',
  	price: 45.98,
    image: 'stock-dove'
  	},
    {
	  name: 'Turtle Dove',
  	price: 0.01,
    image: 'turtle-dove'
    },
    {
	  name: 'Woodpigeon',
  	price: 0.01,
    image: 'woodpigeon'
  	}
  ];
}])
