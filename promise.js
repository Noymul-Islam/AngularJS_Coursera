function showjsonData(path)
{
   return new Promise(function(resolve,reject){
        // var xhttp = new XMLHttpRequest();

   // var xhttp = new XMLHttpRequest();
   //  xhttp.onreadystatechange = function() {
   //      if (this.readyState == 4 && this.status == 200) {
   //          //document.getElementById("demo").innerHTML =
   //          //this.responseText;
   //          resolve(this.responseText);
   //     }
   //  };
   //  xhttp.open("GET", "promise.json", true);
   //  xhttp.send(); 


      });



}



showjsonData("promise.json")
.then(function(result){
    console.log(result);
},function(error){});
console.log('Exiting Global context');


































// // function getSum(n1, n2) {   
// //    var isAnyNegative = function() {   
// //       return n1 < 0 || n2 < 0;   
// //    }   
// //    var promise = new Promise(function(resolve, reject) {   
// //       if (isAnyNegative()) {   
// //          reject(Error("Negatives not supported"));   
// //       }   
// //       resolve(n1 + n2)
// //    });
// //    console.log("Helllloooo");   
// //    return promise;   
// // }

// // getSum(5, 6)   
// // .then(function (result) {   
// //    console.log(result);   
// // },   
// // function (error) {   
// //    console.log(error);   
// // }); 
// // console.log("Helllloooo");

// let ccc = function(){

//    return new Promise(function(resolve,reject){
//       resolve("Clean");
//    });
// };

// let ggg= function(p){
//    return new Promise(function(resolve, reject){
//       resolve("Remove Gerbage");

//    });
// };
// let sss = function(p)
// {
//    return new Promise(function(resolve, reject){
//       resolve("Icecream");
//    });
// }

// ccc().then(function(){
//    ggg().then( function(){
//     sss().then(function(){
//    console.log("Finished");
// });
// });
// });