var number = require("readline-sync")
var num=number.questionInt("enter the number")
if (num<=10){
    console.log("this is less then 10:",num);}
else if (num>10 && num<=20){
    console.log("this is less than 20:",num);
}
else if (num>20){
    console.log("this is greater than 20:",num);
}



