let dict={"name":"Raju", "marks":56}
const n = require("readline-sync")
var user=n.question("Enter the name to check wether it is in the object or not")

for(i in dict){
    if (user==i){
        console.log("it exits")
        break
    }else{
        console.log("it's not exits")
        break
    }
}

    
    