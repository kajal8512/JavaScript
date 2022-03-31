var num = require("readline-sync")
var number=num.questionInt("enter the no.")
var number1=num.questionInt("enter the no.")


if (number>=number1){
    console.log("greater than number",number);
}
else {
    console.log("greater than number1",number1);
}