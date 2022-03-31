// promise.all()
// exp- 1

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// exp-2

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 1000);
// });

// Promise.all([p1, p2, p3]).then(values => {
//   console.log(values); // [3, 1337, "foo"]
// });



// I will take one variable and check that is true of not by promise


// let complete=false;

// function prom(complete) {  
//   return new Promise(function(resolve,reject) {
//     console.log("Data is fatcing, please wait")
//     setTimeout(()=>{
//       if (complete){
//         resolve ("I am sucessful")
//       }
//       else{
//         reject ("I am failed")
//       }
//     },3000)
//   })
// }

// let onfulfilment=(result)=>{
//   console.log(result);
// }

// let onRejection=(error)=>{
//   console.log(error)
// }

// prom(true).then(onfulfilment);
// prom(true).catch(onRejection);




// function prom(complete) {  
//   return new Promise(function(resolve,reject) {
//     console.log("Data is fatcing, please wait")
//     setTimeout(()=>{
//       if (complete){
//         resolve ("I am sucessful")
//       }
//       else{
//         reject ("I am failed")
//       }
//     },3000)
//   })
// }


// prom(true).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)})


// function prom(a,b) {  
//   return new Promise(function(resolve,reject) {
//     console.log("Data is fatcing, please wait")
//     var c=a/b
//     setTimeout(()=>{
//       if (a,b){
//         resolve (`your answer is: ${c}`)
//       }
//       else{
//         reject ("I am failed")
//       }
//     },3000)
//   })
// }


// prom(5,0).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)})



// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));



// const promise1 = new Promise((resolve, reject) => {
//     throw 'Uh-oh!';
//   });
  
//   promise1.catch((error) => {
//     console.error(error);
// });



// let n=require("readline-sync")
// let number=n.question("enter the no.")


// let prom=new Promise (function(resolve, reject){
//     if(number%2==0){
//         resolve(`${number} even number`);
//     }
//     else{
//         reject(`${number} odd number`);
//     }
// });

// prom.then((result)=>{
//     console.log(result)
// })
// prom.catch((error)=>{
//     console.log(error)
// })


// let n=require("readline-sync")
// let number=n.question("enter the no.")

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);





// let pro=new Promise(function (resolve,reject){
//     var error=true
//     if(error){
//         resolve(error)
//     }
//     else{
//         reject(error)
//     }
    
// });

// let tbl=(table,table2)=>{
//     while(table<=table2){
//         for(var i=1; i<=10; i++){
//             console.log(table,"*",i,"=",table*i)
//         }
//         table++;
//     }
// }
// let notbl=(error)=>{
//     console.log(error)
// }
// pro.then(tbl(4,7));
// pro.catch(notbl);




// const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
//     resolutionFunc(777);
// });
// // At this point, "promiseA" is already settled.
// promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777



// function sum(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("sum of number")
//         s=a+b
//         resolve(s)
//         reject("error")
//     });
// }
// sum(4,5).then((result)=>{
//     console.log(result)
// })
// sum().catch((error)=>{
//     console.log(error)
// })



//  sum of list
// function sum(list){
//     return new Promise((resolve,reject)=>{
//         s=0;
//         for(i of list){
//             s=s+i
//         }
//         resolve(s)
//         reject("error")
//     });
// }
// sum([2,3,4,5,6]).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })




// function sum(list){
//     return new Promise((resolve,reject)=>{
//         s=0;
//         for(i of list){
//             s=s+i
//         }
//         resolve(s)
//         reject("error")
//     });
// }
// sum([2,3,4,5,6]).then(
//     console.log(s)
// ).catch(
//     console.log("error")
// )

// var n=require("readline-sync")
// var pro=new Promise((res,rej)=>{
//     user=n.question("enter")
//     if(user==="number"){
//         res(user,"It's a num")
//     }
//     else{
//         rej(user,"It's a str")
//     }
// });


// pro.then(result=>{
//     console.log(result)
// })
// pro.catch(err=>{
//     console.log(err)
// })