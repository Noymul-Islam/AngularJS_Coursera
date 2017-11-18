(function(){
'use strict';
angular.module("app",[])
.controller("ShoppingListController", ShoppingListController)
.service("ShoppingListService",ShoppingListService)
.directive("shoppingList",ShoppingListDirective); 

function ShoppingListDirective(){
	var ddo={
		templateUrl:"shoppingList.html",
		scope:{
			items: '=',
			badRemove: '=',
			onRemove:  '&'
		},
		controller: ShoppingListDirectiveController,
		controllerAs : 'list',
		bindToController: true,
		link: ShoppingListDirectiveLink

	};
	return ddo;
}
function ShoppingListDirectiveLink(scope,element,attrs,controller){
	// console.log("Link Scope is ",scope);
	// console.log("Controller instance is ", controller);
	// console.log("element is ", element);
	scope.$watch('list.cookiesInList()',function(newValue,oleValue){
		if(newValue==true)
			display();
		else 
			removeCookie();
	}); 
	function display(){
		// var elem = element.find('div');
		// elem.css("display","block");
		var elem = element.find("div");
		    elem.slideDown(900);
	} 
	function removeCookie(){
		// var elem = element.find('div');
		// elem.css("display","none");
		var elem = element.find("div");
		    elem.slideUp(900);
	}
}

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListDirectiveController(ShoppingListService){
	var list = this;
	list.cookiesInList= function(){
	for (var i=0;i<list.items.length;i++){
		var name= list.items[i].name;
		if(name.toLowerCase().indexOf("cookie")!=-1)
			return true;
	}
	return false;
	}
}
function ShoppingListService()
{
	var service = this;
	var items=[];
	service.addItem= function(itemName, itemQuantity)
	{
		var item ={
			        name: itemName,
			        quantity: itemQuantity

		          };
		          items.push(item);

	}
	service.getItem= function()
	{
		console.log(items);
		return items;
	}
	service.removeItem = function(index){

		items.splice(index,1);
	}
}

function ShoppingListController(ShoppingListService){ 

   var list = this; 
   list.itemName="";
   list.itemQuantity="";
   list.addItem = function(){
   	ShoppingListService.addItem(list.itemName, list.itemQuantity);
   }
   list.items = ShoppingListService.getItem();
   console.log(list.items);
   list.removeItem = function(index){
   	console.log(this);
   	ShoppingListService.removeItem(index);

   }


}



})();