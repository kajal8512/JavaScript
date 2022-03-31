let n=require("readline-sync")
let harshad=n.question("Enter a number")
let temp =harshad
let sum=0;
while(harshad>0){
    var d=harshad%10
    sum=sum+d
    harshad=Math.floor(harshad/10)
    // console.log(harshad)
    // div=temp%sum

}
// console.log(div)

if(temp%sum===0){
    console.log("harshad");
}
else{
    console.log("no harshad");
}