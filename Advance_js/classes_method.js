// class Student{
//     biodata(){
//         console.log("hi i am class");
//     // }
// }
// // let obj1=new student();
// // obj1.biodata();

// Student();


// class student{
//     constructor(name,age,deg){
//         this.myname=name;
//         this.myage=age;
//         this.mydeg=deg;
//     }
//     biodata(){
//         console.log(`hi i am class ${this.myname}. my age is ${this.myage}. I have deg of ${this.mydeg}`);
//     }
// }
// let obj1 =new student("kajal",20,"msc");
// let obj2=new student("dilshda",21,"bsc")
// obj1.biodata();
// obj2.biodata();



// class student{
//     constructor(name,age,deg){
//         this.myname=name;
//         this.myage=age;
//         this.mydeg=deg;
//     }
//         // instance method
//     biodata(){
//         console.log(`hi i am class ${this.myname}. my age is ${this.myage}. I have deg of ${this.mydeg}`);
//     }
// }

// class player extends student{

// }
// let obj1 =new player("kajal",20,"msc");
// let obj2=new player("dilshda",21,"bsc")
// obj1.biodata();
// obj2.biodata();




// class student{
//     constructor(name,age,deg){
//         this.myname=name;
//         this.myage=age;
//         this.mydeg=deg;
//     }
//         // instance method
//         // if we will use stick mothed then it will not user in other class.
//     biodata(){
//         return (`hi i am class ${this.myname}. my age is ${this.myage}. I have deg of ${this.mydeg}`);
//     }
// }

// class player extends student{
//     constructor(name,age,deg,game){
//         super(name,age,deg);
//         this.mygame=game;
//     }
//     play_biodata(){
//         return `${super.biodata()}. i am player of this ${this.mygame} game`;
//     }
// }
// let obj1 =new player("kajal",20,"msc","kho-kho");
// console.log(obj1.play_biodata());
