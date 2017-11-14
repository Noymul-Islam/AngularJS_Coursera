// var parent ={
// 	value :"parentValue",
// 	obj :{
// 		objValue: "parentObjValue"
// 	},
// 	walk: function(){
// 		console.log("walking");
// 	}

// }; 

// var child = Object.create(parent);
// console.log("Child-->", child.value);
// /******************************************/
// child.value="childvalue";

// child.obj={
// 	"name": "shorot"
// };
// child.obj.objValue="ChildObjValue";
// console.log("CHILD- child.value", child.value);
// console.log("CHILD--child.obj.objValue",child.obj.objValue);
// console.log("Parent", parent.value);
// console.log("Parent", parent.obj.objValue);
// console.log(child);

function Dog(name)
{
	this.name=name;
	console.log("'this' is:",this);
}

var myDog= new Dog("Max");
console.log("myDog:",myDog);

Dog("Max2");