// program to stop the setTimeout() method

// let count = 0;

// // function creation
// function increaseCount(){

//     // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// // clearTimeout
// clearTimeout(id); 
// console.log('setTimeout is stopped.');

// const a=5;
// function add(){
//     let a=5
//     // return a
// }
// console.log(add());
// console.log(a)


// function add (){
//     let a=5;
// }
// add();
// console.log(a)
 
// console.log("10"+5+5)
// console.log(10+5+"10")
// console.log(Number(""))
// console.log(Number(null))

// var sum=function (a,b){
//     return a+b
// }
// console.log(sum(4,5))

// (function(a,b){
//     console.log(a+b)
// })(4,5)
// console.log(sum)


async function f() {
    try {
      fetch('https://api.merakilearn.org/cous')
      .then(res => res.json())
      .then(data => console.log("Hello world",data))
    } catch(err) {
      console.log("rld", err)
    }
  }
  f()
