var module = angular.module('mymodule', [])

module.controller('mycontroller', function($scope, $timeout){

	$timeout(function() {

		$scope.time = new Date().toLocaleTimeString();

	}, 3000);
	
});