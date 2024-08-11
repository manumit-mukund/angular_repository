var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.name = "Ram";
	$scope.city = "Delhi";

	$scope.details = function () {

		return "This is a function variable:" + $scope.name + " " + $scope.city;
	}

});