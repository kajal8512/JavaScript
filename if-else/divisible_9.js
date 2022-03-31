var num = require("readline-sync")
var number=num.questionInt("enter the no.")

if (number%2==0){
    console.log("divisible by 2");
}
else{
    console.log("it not divisible by 2")
}