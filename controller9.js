(function(){
	'user strict';
	var shoppingList1=["milk","lool","pool"];
	var shoppingList2=[
	{
		name: "Milk",
		quantity: "2"

	},
    {
		name: "silk",
		quantity: "3"

	}, 




	];
	angular.module("ShoppingListApp",[])
	.controller("ShoppingListController",ShoppingListController);
	ShoppingListController.$inject=['$scope'];
	function ShoppingListController($scope)
	{
		$scope.shoppingList1=shoppingList1;
		$scope.shoppingList2=shoppingList2;

	}

})();