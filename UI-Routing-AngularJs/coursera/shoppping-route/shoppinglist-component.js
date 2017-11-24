(function(){
	"use strict";
	angular.module("ShoppingList")
	.directive("shoppingList",function(){
		return     {
			          items: "=",
             templateUrl :"shoppinglist-template.html"
     };
	});

})();