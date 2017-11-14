(function(){
	'use strict';
	angular.module("CounterApp",[])
	.controller("CounterController",CounterController);
	CounterController.$inject=['$scope'];
	function CounterController($scope){
	    console.log($scope);
		$scope.onceCounter=0;
		$scope.Counter=0;
		$scope.age=125;
		$scope.showNumberOfWatchers= function(){
		 	console.log($scope);
  //          $scope.count+=1;
  //          console.log($scope.count);
  //         console.log($scope.$digest);
  //         console.log($scope.$$watchersCount);
		 };
		$scope.countOnce= function(){
			$scope.onceCounter=1;


		}
		$scope.upCounter= function(){
			$scope.Counter++;
			console.log($scope);


		}

		// $scope.$watch('onceCounter', function (newValue, oldValue){
		// 	// console.log(oldValue);
		// 	// console.log(newValue);
		// });
		// $scope.$watch('Counter', function (newValue, oldValue){
		// 	// //console.log(oldValue);
		// 	// console.log(newValue);
		// });

	}

})();