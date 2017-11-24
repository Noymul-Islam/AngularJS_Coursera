(function(){
	'use strict';
	angular.module("ShoppingList")
	.config(RoutesConfig);
	RoutesConfig.$inject=["$stateProvider","$urlRouterProvider"];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state("home",{
			url: "/",
			templateUrl:"home-template.html"
		})
		.state("mainList",{
			url: "/main-list",
			templateUrl:"/main-shopping-list-template.html",
			controller: "MainShoppingListController as mainList",
			resolve: {
				items: ['ShoppingListService', function(ShoppingListService){
					return ShoppingListService.getItems();

				}]
			}
		})
		.state("itemDetail",{
			url:'/item-detail;/{itemId}',
			templateUrl:"item-detail-template.html",
			controler : "ItemDetailController as itemdetail",
			resolve:{
				item:["$staetParams",'ShoppingListService', function($staetParams, ShoppingListService){

                   return ShoppingListService.getItems().then(function(items){

                         return  items[$staetParams.itemId];


                   });
				}]
			}
		});
	}

})();