// async function test() {
//     return "hello";    
// }
// test().then((result)=>{
//     console.log(result)
// })


// we can use any function for async

// let test=async()=>"hello";
// test().then((result)=>{
//     console.log(result)
// })


// Await method

// async function test() {
//     console.log("A");
// await console.log("B");
//     console.log("C");
// }
// test();
// console.log("D");
// console.log("E");



// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


// const obj = JSON.parse(text);
// console.log(typeof(obj))


// async function test() {
//     console.log("2: message");
//     const response = await fetch(JSON.parse(text));
//     console.log("3: message");
//     const student =await response.json();

//     return student;
// }
// console.log("1: message");
// let a= test();
// console.log("4 : message");
// console.log(a);



// function scaryClown() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 2000);
//     });
//   }
  
//   async function msg() {
//     const mg = await scaryClown();
//     console.log('Message:', mg);
//   }
  
  msg(); // Message: 🤡 <-- after 2 seconds



// function who() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 200);
//     });
//   }
  
//   function what() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('lurks');
//       }, 300);
//     });
//   }
  
//   function where() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('in the shadows');
//       }, 500);
//     });
//   }
  
//   async function msg() {
//     const a = await who();
//     const b = await what();
//     const c = await where();
  
//     console.log(`${ a } ${ b } ${ c }`);
//   }
  
//   msg(); // 🤡 lurks in the shadows <-- after 1 second