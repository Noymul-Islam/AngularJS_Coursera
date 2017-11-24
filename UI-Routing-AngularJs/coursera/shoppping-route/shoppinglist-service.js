(function(){
	'use strict';
	angular.module("ShoppingList")
	.service("ShoppingListService",ShoppingListService);
	ShoppingListService.$inject= ["$q","$timeout"]
	function ShoppingListService($q,$timeout){

		var service =this;
		var items= [];
		items.push({
			name: "sugar",
			quantity: "2 bags"
			description: "Sugar is very sweet!! We love sugar!"

		});
		items.push({
			name: "flour",
			quantity: "3 bags"
			description: "Flour is very important!! We can make bread from that!"

		});
		items.push({
			name: "Chips",
			quantity: "1 bag"
			description: "Chips is a unhealthy food!! Dont have it bro!"
		});
		service.getItems= function(){
			var deffered= $q.defer();
			//console.log("dsdsd");
			$timeout(function(){

				deffered.resolve(items);
			},800);
		 return deffered.promise;	

		}

	}

})();