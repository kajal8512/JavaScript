var num = require("readline-sync")
var number=num.questionInt("enter the no.")
var number1=num.questionInt("enter the no.")

if (number%number1==0){
    console.log("it's divisible");
}
else {
    console.log("it's not divisible")
}