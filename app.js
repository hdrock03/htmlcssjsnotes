// const walkTheDog= new Promise((resolve,reject) => {

// let walkTheDog=true;

// if(walkTheDog){
//     resolve("yes,she walked the dog")
// }else{
//     reject("not walked")
// }
// })

// walkTheDog
// .then(resolveValue => console.log(resolveValue))
// .catch(rejectValue => console.log(rejectValue))


//  polyfill for Map()

// const arr1=[1,2,3,4,5];

// Array.prototype.customMap = function(callback){
//     let arr = [];
//     for(i=0; i< this.length; i++){
//         arr.push(callback(this[i]))
//     }
//     return arr;
// }

// function double(x){
//     return x*2;
// }

// const output=arr1.customMap(double);
// console.log(output)

// polyfill for foreach

// function greeting(name){
//     alert("hello " +name)
// }
// function input(callback){
//     var name=prompt("enter your name")
//      callback(name)
// }
// input(greeting)

