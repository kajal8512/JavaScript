const n = require("readline-sync")
var num = n.questionInt("Enter the no.")

obj ={}
for(var i=1; i<=num; i++){
    var a = i**2
    obj[i] = a
}
console.log(obj)