var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.name = "Ram";
	$scope.city = "Delhi";

});

module.run(function ($rootScope) {

	$rootScope.name = "Dashrath";
	$rootScope.city = "Ayodhya";

});