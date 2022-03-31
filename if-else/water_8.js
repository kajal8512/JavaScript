var l1 = require("readline-sync")
var l2=l1.questionInt("enter the water quantity")

if (l2<=1){
    console.log("tank want more water");
}
else if (l2>1 && l2<=10){
    console.log("tank want water");
}
else if (l2>10){
    console.log("tank filled overflow");
}