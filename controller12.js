(function(){
	"use strict";
	angular.module("ShoppingListApp",[])
	.controller("ShoppingListAddController",ShoppingListAddController)
	.controller("ShoppingListShowController",ShoppingListShowController)
	.service("ShoppingListService",ShoppingListService);
  ShoppingListAddController.$inject=["ShoppingListService"];

  function ShoppingListAddController(ShoppingListService){
     var itemAdder= this;
     itemAdder.itemName="";
     itemAdder.itemQuantity="";
   //  console.log(ShoppingListService);
     itemAdder.addItem= function(){

     	ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
          //console.log(ShoppingListService); 


          itemAdder.itemName="";
          itemAdder.itemQuantity="";
     }

  }
  ShoppingListShowController.$inject=["ShoppingListService"];
  function ShoppingListShowController(ShoppingListService){
  	var showList= this;
  	showList.items=ShoppingListService.getItem();
  	//console.log(showList.items);
 
  }

  function ShoppingListService(){
  	var service = this;
  	var items=[];
  	console.log('Hellll');
  	service.addItem= function(itemName,quantity){
        
  		var item ={
           name: itemName,
           quantity: quantity
  		};
  		items.push(item);
  	}
  	service.getItem= function(){
        //console.log("ds");
  		return items;
  	}

  }


})();