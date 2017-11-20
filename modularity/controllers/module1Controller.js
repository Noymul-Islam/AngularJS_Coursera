var app =angular.module("module1");

app.controller("module1Controller", module1Controller);

module1Controller.$inject=["$scope","commonService"];

function module1Controller($scope,commonService){

   $scope.name="";
   $scope.quantity= "";
	$scope.addItems = function(){
		 // alert("aiisi");
          commonService.addItems($scope.name,$scope.quantity);
          $scope.name="";
          $scope.quantity= "";

	}


}