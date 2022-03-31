let num = require("readline-sync")
var integer_num = num.questionInt("Enter the number")

if (integer_num>0){
    console.log("positive num");
}
else if (integer_num==0){
    console.log("Zero");
}
else{
    console.log("negative num")
}