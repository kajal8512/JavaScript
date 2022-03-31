var num = require("readline-sync")
var number = num.questionInt("Enter the no.")

if (number%3==0 && number%7==0){
    console.log("chacolate");
}
else if (number%3==0){
    console.log("chaco");
}
else if (number%7==0){
    console.log("late");
}
else{
    console.log("not divisible by 3,7")
}