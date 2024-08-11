var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope, $interval) {

	$interval(function () {

		$scope.time = new Date().toLocaleTimeString();

	}, 1000);

});