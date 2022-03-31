// without higher oder function 
// const arr1 = [1, 2, 3];
// const arr2 = [];
// for(let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
// // prints [ 2, 4, 6 ]
// console.log(arr2);


// with higher oder function
// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(function(item) {
//   return item * 2;
// });
// console.log(arr2);



// We can make this even shorter using the arrow function syntax:

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(item => item * 2);
// console.log(arr2);


// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = [];
// for(let i = 0; i < birthYear.length; i++) {
//   let age = 2018 - birthYear[i];
//   ages.push(age);
// }
// // prints [ 43, 21, 16, 23, 33 ]
// console.log(ages);




// const interviewQuestion=(name)=>{
//   if (name==="Nisha"){
//     return function (topic) {
//       console.log(`Hello ${name}. This is your topic ${topic}? So explain it in brief `);
//     }
//   }
//   else if (name==="Lovely"){
//     return function (topic) {
//       console.log(`Hello ${name}. This is your topic ${topic}? So explain it in brief `);
//     }
//   }
//   else if (name==="Nikita"){
//     return function (topic) {
//       console.log(`Hello ${name}. This is your topic ${topic}? So explain it in brief `);
//     }
//   }
//   else{
//     return function (){
//     console.log("Welcome to interview");
//     }
//   }
// }

// this is the first way to calling a function 
// interviewQuestion("Nisha")("js")

// This is second way of calling function
// let inter=interviewQuestion("Lovely")
// // inter("python")
// inter("js")