//console.log(show());
(function(){
	'user strict';
	angular.module('MsgApp',[])
	.controller('MsgController', MsgController)
    .filter('loves',LoveFilter)
    .filter('truth',TruthFilter);
	//MsgController.$inject= ['$scope','$filter','lovesFilter'];
	function MsgController($scope,$filter,lovesFilter){
		$scope.name= "Shorot";
		$scope.sayMessage= function ()
		{
			//debugger;
			var text= "Hi I eat food";
			var outPut= $filter('uppercase')(text); 
			return outPut;
		}
		$scope.state="hungry";
		$scope.feedShorot= function()
		{
			$scope.state="eating";
		}
	   $scope.sayLoveMessage= function ()
		{
			//debugger;
			var text= "Hi I eat food";
			var outPut= lovesFilter(text); 
			return outPut;
		}
	}
	function LoveFilter(){
		return function(input){
             input= input || "";
            
             input=input.replace("eat", "eaten");
            // debugger;
            // console.log(input);
             return input;
		}
	}

	function TruthFilter(){
		return function(input, target,replace)
		{
			console.log("-"+input);
			input=input||"";
			input= input.replace(target,replace);
			return input;
		}
	}



})();