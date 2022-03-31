// let string ="";
// for (var i=4; i>=0; i--){
//     for(var j=5; j>=1; j--){``
//         string+=i+1
//     }
//     string+="\n";
// }
// console.log(string);

// let string =""
// for (var i=1; i<=6; i++){
//     for(var j=1; j<=6-i; j++){
//         string+="*"
//     }
//     string+="\n";
// }
// console.log(string)


// let n = 5; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode((i - 1) + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5; // you can take input using prompt or change the value
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(count + 65);
//     count++; // increment cause next alphabet
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 5;
// let string="";
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j < i; j++){
//         string+=(j)
//     }
//     string+="\n";
// }
// console.log(string)


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 10;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let n=5;
// let string ="";
// let raw=1;
// while(raw<=n){
//     col=1
//     while(col<=n-raw){
//         string+=" ";
//     }
//     if(raw==1 && col==5){
//         string+="*";
//     }
//     raw+=1
// }
// console.log(string)



// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i *2 -1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) *2- 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



