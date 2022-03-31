// doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//         doThirdThing(newResult, function(finalResult) {
//             console.log("Final Result: " + finalResult);// doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//         doThirdThing(newResult, function(finalResult) {
//             console.log("Final Result: " + finalResult);
//         }, failureCallback);
//     }, failureCallback);
// }, failureCallback);


// doSomething()
// doSomethingElse()
// doThirdThing()




// const funA=()=>{
//     setTimeout(function(){
//         console.log("welcome funA");
//         funB();   
//     },3000);
// }
// const funB =()=>{
//     console.log("welcome funB");
// }

// funA();


// const funA=()=>{
//     setTimeout(function(){
//         console.log("welcome funA");   
//     },3000);
// }
// const funB =()=>{
//     setTimeout(function() {
//         console.log("hii pooja")
//         console.log("welcome funB");
//     },2000)
    
// }
// funA();
// funB();




// const funA=()=>{
//     setTimeout(function(){
//         console.log("welcome funA");
//         funB();   
//     },3000);
// }
// const funB =()=>{
//     console.log("welcome funB");
// }

// funA();


// const funA=()=>{
//     setTimeout(function(){
//         console.log("welcome funA");   
//     },3000);
// }
// const funB =()=>{
//     setTimeout(function() {
//         console.log("hii pooja")
//         console.log("welcome funB");
//     },2000)
    
// }
// funA();
// funB();


// 1:2s student roll No.
// 2:2s 2n name and age
// 3:2s gender


// const getRollNo=()=>{
//     setTimeout(()=>{
//         console.log("Api is calling ")
//     },2000);
// }
// getRollNo();

// for getting "2s 2n name and age"
// const getRollNo =()=>{
//     setTimeout(()=>{
//         console.log("api getting roll no.")
//         let roll_no=[1,2,3,4,5];
//         console.log(roll_no);

//         setTimeout((roll_no)=>{
//             const biodata={
//                 name:"kajal",
//                 age:20
//             }
//             console.log(`my name is ${biodata.name}. and I am ${biodata.age} years old`)
//         },2000,roll_no[1]);
//     },2000);
// }
// getRollNo();



// const getRollNo =()=>{
//     setTimeout(()=>{
//         console.log("api getting roll no.")
//         let roll_no=[1,2,3,4,5];
//         console.log(roll_no);

//         setTimeout((roll_no)=>{
//             const biodata={
//                 name:"kajal",
//                 age:20
//             }
//             console.log(`my roll no is ${roll_no}. my name is ${biodata.name}. and I am ${biodata.age} years old`)


//             setTimeout(()=>{
//                 biodata.gender="female"
//                 console.log(biodata);
//                 console.log(`my roll no is ${roll_no}. my name is ${biodata.name}. and I am ${biodata.age} years old. i am a ${biodata.gender}.`)

//             },2000);
//         },2000,roll_no[1]);
//     },2000);
// }
// getRollNo();


// const getRollNo =()=>{
//     // setTimeout(()=>{
//         console.log("api getting roll no.")
//         let roll_no=[1,2,3,4,5];
//         console.log(roll_no);

//         setTimeout((roll_no)=>{
//             const biodata={
//                 name:"kajal",
//                 age:20
//             }
//             console.log(`my roll no is ${roll_no}.  my name is ${biodata.name}. and I am ${biodata.age} years old`)
//         },2000,roll_no[1]);
//     // },2000);
// }
// getRollNo();


// const funA=()=>{
//     setTimeout(function(){
//         console.log("welcome FunA")
//     },2000)
// }
// const funB=()=>{
//     console.log("welcome funB")
// }
// funA();
// funB();







