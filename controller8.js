(function(){
	'use strict';
	angular.module("counterApp",[])
	.controller("CounterController",CounterController);
	CounterController.$inject=['$scope'];
	function CounterController($scope){
		$scope.counter=0;
		$scope.upCounter= function(){
			// setTimeout(function(){
			// 	//
			// 	$scope.$apply(function(){

   //              $scope.counter++;
			
			// 	console.log("Counter Incremented!");
			// 	console.log(a);

			// 	});

			// },2000);
			setTimeout(function(){
		
				
                $scope.counter++;
			
				console.log("Counter Incremented!");
				//console.log(a);
                
                 //console.log(a);
				 $scope.$digest();

			},2000);
			//$scope.counter++;
		};
	}

})();