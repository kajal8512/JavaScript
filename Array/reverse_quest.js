// let n=require("readline-sync")
// let user=n.question("Enter the no.")
// let arr=[1,2,3,4,5,6]
// let a=[];
// let i=0;
// while(i<=arr.length-user){
//     a.push(arr[i])
//     i++;
// }
// j=0;
// while(j<=user){
//     a.push(arr[-j])
//     j++;
// }
// console.log(a)


let n=require("readline-sync")
let user=n.question("Enter the no.")
str=user.split('')
let a=[];
let i=0;
while(i<=str.length){
    if(str[i]%2==0){
        a.push(str[i])
    }
}