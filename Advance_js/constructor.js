// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person = new Person();
// console.log(person.name)




// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();
// console.log(person1);

// access properties
// console.log(person1.name);  // John
// console.log(person2.name);  // John



// function Leptop(ram,module){
//     this.Ram=ram,
//     this.Module=module
// }
// const leptop=new Leptop("4gb","i3")
// console.log(leptop)


// for creating multipul object by constuctor

// function Leptop(ram,module){
//     this.Ram=ram,
//     this.Module=module

//     this.window=function (Window){
//         this.windoe=Window
//         console.log(`I am your leptop ${this.windoe}`)
//     }
// }
// const leptop=new Leptop("4gb","i3")
// // const info=new Leptop().window("ubntu")
// // console.log(leptop)
// leptop.window("ubntu")
// console.log(leptop)



// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // { ... }




// creating a class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // creating an object
// const person1 = new Person('John');
// const person2 = new Person('Jack');

// console.log(person1.name); // John
// console.log(person2.name); // Jack


class Person {
    constructor(name) {
    this.myname = name;
  }

    // defining method
    greet() {
        console.log(`Hello ${this.myname}`);
    }
}

let person1 = new Person('John');

// accessing property
// console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John


