(function(){
	"use strict";
	angular.module("ShoppingListPromiseApp",[])
	.controller("ShoppingListController",ShoppingListController)
	.service("ShoppingListService",ShoppingListService)
	.service("WeightLossFilterService",WeightLossFilterService);
	ShoppingListController.$inject=["ShoppingListService"];
	function ShoppingListController(ShoppingListService){
		// debugger;
		var list = this;
		list.items= ShoppingListService.getItems();
		list.itemName="";
		list.itemQuantity= "";
		list.addItem= function(){
			ShoppingListService.addItem(list.itemName, list.itemQuantity);

		}
		list.removeItem = function()
		{
			alert("Mara Kha...");
		}
	}
	ShoppingListService.$inject= ["$q","WeightLossFilterService"];
	function ShoppingListService($q,WeightLossFilterService){
		var service= this;
		//List of shopping items
		// debugger;
		var items=[];
		service.addItem = function(name, quantity){
			//var promise = WeightLossFilterService.checkName(name);
               var namePromise = WeightLossFilterService.checkName(name);
               var quantityPromise    = WeightLossFilterService.checkQuantity(quantity);
               $q.all([namePromise,quantityPromise]).
               then( function(response){
               	var item = {
                    name: name,
                    quantity: quantity
               	};
               	items.push(item);

               })
               .catch( function(errorResponse){
               	console.log(errorResponse.message);

               });  



                // promise
                // .then(function(response){
                // 	return WeightLossFilterService.checkQuantity(quantity);
                // })
                // .then( function(response){
                // 	var item ={
                // 		name: name,
                // 		quantity: quantity

                // 	};
                // 	items.push(item);
                // })
                // .catch(function(errorResponse){
                // 	console.log(errorResponse.message);

                // });

			// promise.then(function(response){
			// 	var nextPromise = WeightLossFilterService.checkQuantity(quantity);
			// 	nextPromise.then( function(result){
			// 		var item = {
			// 			name: name,
			// 			quantity: quantity

			// 		};
			// 		items.push(item);
                  
			// 	}, function (errorResponse){
			// 		console.log(errorResponse.message);
			// 	});
			// }, function(errorResponse){
			// 	console.log(errorResponse.message);
			// });

		}
		service.getItems = function(){
			return items;
		}
	}
	WeightLossFilterService.$inject=['$q', '$timeout'];
	function  WeightLossFilterService($q , $timeout){
		// debugger;
		var service = this;
		service.checkName= function(name){
			var deffered = $q.defer();
			var result = {
               message : ""       
			};
			$timeout(function(){
              if(name.toLowerCase().indexOf("cooki")===-1){
              	deffered.resolve(result);
              }
              else {
              	result.message= "Stay Away from Cookies, Shorot!!!";
              	deffered.reject(result);
              }

			},3000);
			return deffered.promise;
		}
	 service.checkQuantity= function(quantity){
	 	var deffered = $q.defer();
	 	var result={
	 		message: ""

	 	};
	 	$timeout(function(){
	 		if(quantity<6){
	 			deffered.resolve(result);
	 		}
	 		else{

	 			result.message= "This is too much shorot!!!";
	 			deffered.reject(result);
	 		}

	 	},1000);
	 	return deffered.promise;
	 }
	}

})();