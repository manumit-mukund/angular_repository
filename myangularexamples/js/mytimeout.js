var module = angular.module('mymodule', [])

module.controller('mycontroller', function($scope, $timeout){

	$timeout(function() {

		$scope.text = "A timeout function";

	}, 3000);
	
});