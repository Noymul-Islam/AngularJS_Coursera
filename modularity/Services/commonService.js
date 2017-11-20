angular.module("module2")
.service("commonService",commonService);


function commonService(){

	var service = this;
	var items=[]; 
	service.addItems= function(name,quantity){
          var item= {
          	name:name,
          	quantity: quantity

          };
          items.push(item);
	}
	service.getItems= function(){
		return items;
	}
}