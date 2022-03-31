// const older=["kajal","yadav","lovely"];
// const newarr=older.map(function(cvalue,i){
//     return i+":"+cvalue+"love";
// })
// console.log(newarr);

// let arr=[3,4,5,6];
// for(let i=0; i<arr.length; i++){
//     arr[i]=arr[i]*3;
// }
// console.log(arr)


// const n=require("readline-sync")
// var i=0;
// var b=[]
// while(i<=2){
//     let user=n.question("Enter a name")
//     b.push(user)
//     i++;
// }
// var arr=b.map(function(sar,i){
//     return i+":"+sar+"ng"
// })

// console.log(arr)

var arr=[1,3,4,5]

// var a=arr.map(function(i){
//     return i**2
// })
// console.log(a)


var a = arr.map((i)=>{
    return i**2;
});
console.log(a)