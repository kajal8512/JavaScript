// var age=[2,40,59,34];
// var result=age.filter(checkAuldt)
// console.log(result)

// function checkAuldt(age){
//     return age>18;
// }


// let fs=require("fs")
// let user=require("readline-sync")
// let dic={}
// let i=1;
// while(i<5){
//     let name=user.question("Enter your first name")
//     let sar_name=user.question("Enter your last name")
//     dic[name]=sar_name
//     i++;
// }
// fs.writeFileSync("Name.json",JSON.stringify(dic,null,3))
// let buf_data=fs.readFileSync("Name.json","utf8")
// console.log(buf_data)

// obj={
//     kajal:"Yadav",
//     Nisha:"yadav",
//     komal:"kumari",
//     priti:"kumari",
//     Ishnehal:"singh"
// }

// arr=[]
// arr.push(obj)
// console.log(arr)




 
// var sar_name=obj.filter(dublicateSarName)
// console.log(sar_name)


// function dublicateSarName(obj){



arr=["kajal","neha","nisha","naina"]

// var array=arr.filter(n)
// console.log(array)


// var a=[]
// function n(arr){
//     return (arr.includes("n"))
// }


var arr1=arr.filter(function (arr2){
    return (arr2.includes("k"))
})
console.log(arr1)