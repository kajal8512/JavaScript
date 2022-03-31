// constructor function
// function Person() {
//     this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3); // 50
// console.log(person1.age); // 20



function Person(name,age) {
    this.name = name
    this.ag=age
}

// adding property 
// Person.prototype.name = 'sonu';
// Person.prototype.age = 23

const person1 = new Person("sonu",20);
// const per =person1.name
console.log(person1); // John
// console.log(person1.age); // 23
