var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.details = [

		{ "name": "Ram", "city": "Ayodhya" },

		{ "name": "Manu", "city": "Delhi" },

		{ "name": "Ramesh", "city": "Patna" }

	];

});