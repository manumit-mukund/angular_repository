var module = angular.module('mymodule', [])

module.controller('mycontroller', function ($scope) {

	$scope.click = function () {

		$scope.sum = $scope.t1*1 + $scope.t2*1;
		$scope.sub = $scope.t1 - $scope.t2;
		$scope.mul = $scope.t1 * $scope.t2;
		$scope.div = $scope.t1 / $scope.t2;

	};	
	
});