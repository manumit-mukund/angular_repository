var module = angular.module('mymodule', [])

module.directive('mydirective', function(){

	var eng = "English";

	return {template : eng}
	
});

module.directive('mymenu', function(){

	var mydropdown = "<select ng-model='city'>";
	mydropdown += "<option>Patna</option>";	
	mydropdown += "<option>Delhi</option>";	
	mydropdown += "<option>Mumbai</option>";

	return {template : mydropdown}	
	
});