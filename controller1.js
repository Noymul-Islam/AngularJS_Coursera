angular.module("app",[])
.controller("firstController",function($scope){
  $scope.name= "Shorot is me";
  $scope.info= function ()
  {
  	return "24 Years old";
  };
  //console.log(number);

});