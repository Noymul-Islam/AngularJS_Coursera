(function(){
'use strict';
angular.module("ShoppingList",[])
.controller("ShoppingListController",ShoppingListController)
.provider("ShoppingListService",ShoppingListServiceProvider);

ShoppingListController.$inject=['ShoppingListService'];
function ShoppingListController(ShoppingListService){
	var list = this;
	list.items= ShoppingListService.getItems();
	list.itemName="";
	list.itemQuantity="";
}


})();