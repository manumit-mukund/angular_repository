var module = angular.module('mymodule', [])

module.directive('mylanguage', function(){

	var eng = "English";

	return {template : eng}
	
});

module.directive('mycitymenu', function(){

	var mydropdown = "<select ng-model='city'>";

	mydropdown += "<option>Patna</option>";	
	mydropdown += "<option>Delhi</option>";	
	mydropdown += "<option>Mumbai</option>";
	mydropdown += "<option>Bangalore</option>";

	return {template : mydropdown}	
	
});