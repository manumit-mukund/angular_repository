var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.text = "Hello World!";


	$scope.click = function () {

		$scope.text = "You clicked the button";

	};
});