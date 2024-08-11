var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.a = 2;
	$scope.b = 3;
	$scope.c = 4;

	if ($scope.a > $scope.b && $scope.a > $scope.c) {

		return $scope.text = "a is biggest.";

	}
	else if ($scope.b > $scope.a && $scope.b > $scope.c) {

		return $scope.text = "b is biggest.";

	}
	else {

		return $scope.text = "c is biggest.";
	}

});