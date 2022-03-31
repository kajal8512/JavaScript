async function test(){
    console.log("2: message");
    const response= await fetch("/home/khushigondhale/Desktop/javascript/json/data.json");
    console.log("3: message");
    const student = await response.json();
    return student;
}

console.log("1 : message");
let a=test();
console.log("4 : message");
console.log(a);