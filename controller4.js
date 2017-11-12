//console.log(show());
(function(){
	'user strict';
	angular.module('MsgApp',[])
	.controller('MsgController', MsgController);

	MsgController.$inject= ['$scope','$filter'];
	function MsgController($scope,$filter){
		$scope.name= "Shorot";
		$scope.sayMessage= function ()
		{
			var text= "Hi I eat food";
			var outPut= $filter('uppercase')(text); 
			return outPut;
		}
		$scope.state="hungry";
		$scope.feedShorot= function()
		{
			$scope.state="eating";
		}
	}

})();