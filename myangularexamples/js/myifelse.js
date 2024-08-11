var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.a = 4;
	$scope.b = 2;

	if ($scope.a > $scope.b) {

		return $scope.text = "a is bigger.";

	}
	else {

		return $scope.text = "b is smaller.";

	}

});