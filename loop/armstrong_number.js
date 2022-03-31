let n=require("readline-sync")
let armstrong=n.question("Enter a number")
let temp = armstrong
let sum=0;
while(armstrong>0){
    var v= armstrong%10;
    sum=sum+v**3
    armstrong = Math.floor(armstrong/10)
    // console.log(armstrong)
}
if(temp==sum){
    console.log("armstrong num")
}
else{
    console.log("not armstrong num")
}
