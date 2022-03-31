let n = require("readline-sync")
let fs=require("fs")
let sentenceName=n.question("Enter the name")
b=fs.writeFileSync("read_data.txt",sentenceName)
// b=fs.appendFileSync("read_data.txt",sentenceName)
c=fs.readFileSync("read_data.txt",b)
org_data=c.toString();

console.log(org_data)


