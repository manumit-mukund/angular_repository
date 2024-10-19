var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.a = 4;
	$scope.b = 2;

	$scope.sum = $scope.a + $scope.b;
	$scope.sub = $scope.a - $scope.b;
	$scope.mul = $scope.a * $scope.b;
	$scope.div = $scope.a / $scope.b;


	$scope.click = function () {

		$scope.sum = $scope.a*1 + $scope.b*1;
		$scope.sub = $scope.a - $scope.b;
		$scope.mul = $scope.a * $scope.b;
		$scope.div = $scope.a / $scope.b;

	};

	
	
});