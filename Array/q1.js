
// var c=2
// function b(){
//     let a=5;
//     if (5>4){
//         console.log(true);
//         console.log(c);
//     }
// }
// console.log(a)
// b();


// var a="3"
// console.log(typeof(Number(a)))


// var a;
// console.log(typeof(a))


// console.log((4>2)? true:false)


// var a=5;
// console.log((a>6)?(a==5 )?"equal": "not equal" : "not greter than")


// let a=require("readline-sync")
// let b=a.question("enter any no.")
// let i=2;
// var c=0;
// do{
//     if(b%i===0){
//     c=c+1 
//   }
//   i++;
 
// }while(i<b)
// if(c===0){
// console.log("prime no.")
// }
// else{
// console.log("not prime no.")
// }

// let a=require("readline-sync")
// let b=a.question("enter any no.")
// var i=1

// do{

// }while(i<b)

// let a =(a,b)=>{
//     return a+b
// }
// console.log(a(4,5))


// rest operator

// let a=(b,...a)=>{
//     return a
// }
// console.log(a(4,6,5))


// let a=()=>{
//     return b
// }
// var b=[1,2,3,4]
// console.log(...b)


// var i=0;
// while(i<10){
//     i++;
//     // console.log(i)
//     if(i==2 || i==3){
//         continue
//     }
//     console.log(i)
//     // i++;
// }


// let a=new Promise


// let a=require("readline-sync")
// let b=a.question("enter any no.")
// i=0
// var temp =b
// var sum=0
// while(i<b){
//     if(b%i==0)
//     sum+=i
//     i++;
// }
// if(temp==sum){
//     console.log(temp,"it's a perfect number");
// }
// else{
//     console.log(temp,"not a perfect number")
// }

// let a=require("readline-sync")
// let b=a.question("enter any no.")
// var temp=b
// var i=0;
// var sum=0
// do{
//     if(b%i==0){
//     sum+=i
//     }
//     i++

// }while(i<b)
// if(temp==sum){
//     console.log(temp,"it's perfect no.");
// }
// else{
//     console.log(temp,"it's not perfect no.");
// }

// find the length of (I am from Delhi)




// function sum(a,b,c){
//     console.log(a+b+c);
// }
// var arrVal=[5,4,3];
// sum(...arrVal);



// a=[1,1,2,3,4,4,5,6]
// b=[2,3,6,6,7]
// c=[]
// var i=0
// while (i<b.length){
//     a.push(b[i])
//     i++;
// }



// var a=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']

// var c=0
// a.filter((i)=>{
//     if (i=="dog"){
//         c++;
//     }
//     else if(i=="cat"){
//         c++;
//     }
//     else if(i=="elephant"){
//         c++;
//     }
//     else if(i=="pearot"){
//         c++;
//     }
//     d[i]=c
// })
// console.log(c);




// var c=0
// a.filter((i,j)=>{
    
// })





// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }



// var a="4"
// var b="6"
// var c="a*b"
// console.log(eval(c));

b=[{a:2,c:4,d:[5,6]}]
console.log(b[0].d);