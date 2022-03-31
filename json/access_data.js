// JSON object
// const data = {
//     "name": "John",
//     "age": 22,
//     "hobby": {
// 	"reading" : true,
// 	"gaming" : false,
// 	"sport" : "football"
//     },
//     "class" : ["JavaScript", "HTML", "CSS"]
// }

// // accessing JSON object
// console.log(data.name); // John
// console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

// console.log(data.hobby.sport); // football
// console.log(data.class[1]); // HTML*/

// const { writeFileSync } = require("fs");




// JSON object
// const data = {
//     "name": "John",
//     "age": 22
// }

// // accessing JSON object
// console.log(data["name"]); // John



// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// // // accessing the data
console.log(typeof(obj)); // John

// const jsonData = { name: "John", age: 22 };

// // converting to JSON
const obj = JSON.stringify(jsonData);
const file=writeFileSync("data.json")
// console.log(file)
// accessing the data
// console.log(typeof(obj)); // "{"name":"John","age":22}"
