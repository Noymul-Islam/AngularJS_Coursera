(function (){
'use strict';
angular.module("ControllerAsApp",[])
.controller("ShoppingListController1",ShoppingListController1)
.controller("ShoppingListController2",ShoppingListController2)
.factory("ShoppingListFactory",ShoppingListFactory);

//List 1 controller
ShoppingListController1.$inject=["ShoppingListFactory"];
function ShoppingListcontroller1(ShoppingListFactory){
	var list1 = this;
	var shoppingList= ShoppingListFactory();
	list1.items= shoppingList.getItems();
}



})();