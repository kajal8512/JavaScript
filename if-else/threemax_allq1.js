let max = require("readline-sync")
var max_Number1=max.questionInt("enter the first number")
var max_Number2=max.questionInt("enter the first number")
var max_Number3=max.questionInt("enter the first number")

if (max_Number1>max_Number2 && max_Number1>max_Number3){
    console.log(max_Number1);
}
else if (max_Number2>max_Number1 && max_Number2>max_Number3){
    console.log(max_Number2);
}
else if (max_Number3>max_Number1 && max_Number3>max_Number2){
    console.log(max_Number3)
}