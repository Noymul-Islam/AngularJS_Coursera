(function(){
	angular.module("ShoppingList")
	.controller("MainShoppingListController",MainShoppingListController)
	.controller("ItemDetailController",ItemDetailController);
	// MainShoppingListController.$inject= ["ShoppingListService"];
	MainShoppingListController.$inject=['items'];
	function MainShoppingListController(items){
		var mainList= this;
		mainList.items= [];
		mainList.items=items;

		// //mainList.$onInit = function(){
		// 	console.log('dssd');
		// 	ShoppingListService.getItems()
		// 	.then(function(result){
		// 		mainList.items=result;
		// 		//console.log(mainList.items);
		// 	});
		// //}
	}
	function ItemDetailcontroller(){
		var itemdetail = this;
	}

})();