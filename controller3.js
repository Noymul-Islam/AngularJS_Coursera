
	'user strict';
	angular.module('DIApp',[])
	.controller('DIController',['$filter','$scope','$injector',DIController]);
	function DIController($filter,$scope, $injector){
		$scope.name="Noymul Islam";

		$scope.upper= function (){
			var upCase= $filter('uppercase');
			$scope.name= upCase( $scope.name);
 
		};
		console.log($injector.annotate(DIController));
	}
	ng-model="name"
{{name}}