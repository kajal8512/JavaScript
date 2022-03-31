var num = require("readline-sync")
var number=num.questionInt("enter the no.")

if (number%5==0 && number%15==0){
    console.log("it's divisible by both");
}
else{
    console.log("it's not divisible by both")
}