var app2=angular.module("module2");

app2.controller("module2Controller",module2Controller);

module2Controller.$inject=["$scope","commonService"];

function module2Controller($scope,commonService){

	$scope.items= commonService.getItems();
	$scope.show = function(){
		console.log($scope.items);
	}
}