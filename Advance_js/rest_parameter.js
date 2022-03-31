// function sum(...inputs){
//     console.log(...inputs)
//     let total=0
//     for(i of inputs){
//         total+=i
//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7)

// when we removed three dots from the console then it show us array
// function sum(...inputs){
//     console.log(inputs)
//     let total=0
//     for(i of inputs){
//         total+=i
//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7)


// function product(...inputs){
//     let pro=1;
//     for(i of inputs){
//         pro*=i
//     }
//     console.log(pro)
// }
// product(1,2,3,4,5)


var product=(a,...inputs)=>{
    let pro=1;
    for(i of inputs){
        pro*=i
    }
    console.log(pro)
}
product(1,2,3,4,5)



