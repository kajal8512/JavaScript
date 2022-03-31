// arr=[1,3,5,4,6,2,3]
// var a=[]
// for(var i=0; i<arr.length; i++){
//     if(!a.includes(arr[i])){
//         a.push(arr[i])
//     }
// }
// console.log(a)


// arr=[1,3,5,4,6,2]
// a=[]
// for(var i=0; i<arr.length-1; i++){
//     var b=arr.sort()
// }
// console.log(b)


// arr=[10,1,3,5,4,6,2,0]
// i=0;
// while(i<arr.length){
//     j=0;
//     while(j<arr.length){
//         if(arr[i]<arr[j]){
//             b=arr[i]
//             arr[i]=arr[j]
//             arr[j]=b
//         }
//         j++;
//     }
//     i++;
// }
// console.log(arr)
// console.log(arr[-2])
// console.log(arr[-3])


// const n=require("readline-sync")
// let user=n.question("enter the name")
// var i=0
// var a=[]
// while(i<user.length){
//     var j=0;
//     while(j<user.length){
//         if(user[i].includes(user[j])){
//             c++;
//         }
//         j++;
//     }
//     i++;    
// }
// console.log(a)
// console.log(c)


// const n=require("readline-sync")
// let table=n.question("enter the no.")
// let table2=n.question("enter the no.")

// var i=1;
// while(i<=10){
//     console.log(table,"*",i,"=",table*i," ",table2,"*",i,"=",table2*i)
//     i++;
// }

// function tbl(table){
//     for(var i=1; i<=10; i++){
//         console.log(table*i)
//     }
    
// }
// tbl(table)



// var pro=new Promise((resolve, reject)=>s({
//     var i=1;
//     while(i<=table){

//     }
// })


// const n=require("readline-sync")
// let table=n.question("enter the no.")

// let a=new Promise((resolve,reject)=>{
// var i=1; 
// while(i<=10){
//     resolve(table*i)
//     i++;
// }
// }).then((table)=>{
//     console.log(table*i)

// }).catch((error)=>{
//     console.log(error)
// })





//op- [["a", 6], ["n", 3], ["t", 2], ["x", 2], ["u", 1], ["g", 1]]

// var n = require("readline-sync")
// var user=n.question("enter your name")
// var name=user.split('')
// var i=0;
// var a=[]
// while(i<name.length){
//     var j=0;
//     var c=0;
//     var b=[]
//     while(j<name.length){
//         if(name[i]===name[j]){
//             c++;
//         }
//         j++; 
//     }
//     if (!b.includes(name[i]&&c)){

//     }
//     else{
//     b.push(name[i])
//     b.push(c)
//     // }
//     console.log(b);
//     if(a.includes(b)){
        
//     } 
//     else{
//         a.push(b)
//     }
//     i++;
// }
// // console.log(c)
// }
// console.log(a)



// // let pro=new Promise((function (resolve,reject){
// //     var error=true
// //     if(error){
// //         resolve(error)
// //     }
// //     else{
// //         reject(error)
// //     }
    
// // }));

// // pro.then(resolve=>{
// //     const n=require("readline-sync")
// //     let table=n.question("enter the no.")
//     let table2=n.question("enter the no.")
//     while(table<=table2){
//         for(var i=1; i<=10; i++){
//             console.log(table,"*",i,"=",table*i)
//         }
//         table++;
//     }
// })
// pro.catch(error=>{
//     console.log(reject)
// })







// arr=["aa","aaa","a","aaaa","aaaaa"]
// m=0;
// min=1;
// for(var i=0; i<arr.length; i++){
//     a=arr[i].length
//     if(m<a){
//        m=a
//     }
// }
// // console.log(m)
// for(var i=0; i<arr.length; i++){
//     a=arr[i].length
//     if(min>a){
//         min=a
//     }
// }
// for(var j=0; j<arr.length; j++){
//     if(arr[j].length==min){
//         console.log("min",arr[j])
//     }
// }
// for(var l=0; l<arr.length; l++){
//     if(arr[l].length==m){
//         console.log("max",arr[l])
//     }
// }



