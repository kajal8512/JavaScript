// Write a Python script to concatenate the following dictionaries to create a new one.

// // Sample Dictionary :

// dic1={1:10, 2:20}
// dic2={3:30, 4:40}
// dic3={5:50,6:60}
// d={}
// for(i in dic1,dic2,dic3){
//     d(dic1[i])=i
//     console.log(d);
// }

// const dic1 = {1:10, 2:20}
// const dic2 = {3:30, 4:40}
// const dic3={5:50,6:60}
// for(i in dic1,dic2,dic3){
//     var a=Object.assign(i)
//     console.log(a);
// }
// const newObj = Object.assign(dic1, dic2,dic3);
// console.log(newObj);


// Expected Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}

// const posts = {'2018-05-11' : {posts: 2}}
// const notes = {'2018-05-11' : {notes: 1}}

// const result = _.merge({}, posts, notes);
// console.log(result)




// var prompt = require('readline-sync');
// var n = prompt.questionInt('How many more times? ');
// d = {}
// for (let i = 0; i <= n; i++) {
// d[i] = i ** 2
// }
// console.log(d);



var a=require("readline-sync")
var n=a.questionInt("enter the number")
d={}
for(let i=0;i<=n;i++){
    d[i]=i**2
}console.log(d);

// var a =  {"2018-05-11" : {notes: 1}};

// var b =  {"2018-05-11" : {posts: 3}};

// var result = {};

// Object.keys(a).forEach(k=>{result[k] = Object.assign(a[k],b[k])});

// console.log(result);
