(function(){
	 "use strict";
	 angular.module("customDirectiveApp",[])
	 .controller("MenuCategoriesController",MenuCategoriesController)
	 .service("MenuCategoriesService",MenuCategoriesService)
	 .constant("ApiBasePath","http://davids-restaurant.herokuapp.com")
	 .directive("listItemDescription",ListItemDescription);

	 function ListItemDescription(){
	 	var ddo={
	 		template: "<a href="" ng-click="menu.longMenuItems(category.short_name);">({{category.short_name}})</a>{{category.name}}"

	 	};
	 }

MenuCategoriesController.$inject= ["MenuCategoriesService"];
function MenuCategoriesController(MenuCategoriesService){
	var menu = this;
	var promise = MenuCategoriesService.getMenuCategories();
	promise.then(function(response){
		menu.categories= response.data;
	})
	.catch(function(error){
       console.log("SomeThing went terribly wrong");
	});

	menu.longMenuItems = function(shortName){
		// console.log("fds");
		var promise = MenuCategoriesService.getMenuForCategory(shortName);
		promise.then(function(response){
			console.log(response.data);
		})
		.catch(function(error){
			console.log("Mara khaiso");

		});

	}
}
MenuCategoriesService.$inject=['$http','ApiBasePath'];
function MenuCategoriesService($http,ApiBasePath){
	var service = this;
	service.getMenuCategories =function(){
		var response;
	     response = $http({
			method: "GET",
			url   :(ApiBasePath+"/categories.json")

		}); 
		return response;
	}
   service.getMenuForCategory = function(shortName){
   	var response = $http({
   		method: "GET",
   		url   :(ApiBasePath+"/menu_items.json"),
   		params: {
   			category: shortName

   		}
   	});
   	return response;
   }

}
})();