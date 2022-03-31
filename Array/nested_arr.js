// var arr=[1,2,3,[4,5,6],7,8]
// var i=0;
// while(i<=arr.length){
//     a=arr[i]
//     if(typeof(a)==="Object"){
//         var j=0;
//         while(j<a.length){
//             if(a[j]%2===0){
//                 console.log(a[j])
//             }
//             j++;
//         }
//     }
//     i++;  
// }

// var arr=[1,2,3,[4,5,6],6,7,8]
// for(var i=0; i<=arr.length; i++){
//     a=arr[i]
//     if(typeof(a)==="object"){
//         for(var j=0; j<=a.length; j++){
//             if(a[j]%2===0){
//                 console.log(a[j])
//             }
//         }
//     }
//     else if(a%2===0){
//         console.log(a)
//     }
// }



// var arr=[10,20,30,15,20,10]
// b=[]
// for(var i=0; i<=arr.length; i++){
//     if(!b.includes(arr[i])){
//         b.push(arr[i])
//     }

// }
// console.log(b)



// function countDuplicates(n, arr) {
//     var count = 0;
//     b=[]
//     arr.sort();
//     for (var i = 0; i < n;) {
//       if (arr[i] === arr[i + 1]) {
//         count++;
//         // b.push(arr[i])
//         i = i + 2;
//       } else {
//         i++;
//       }
//     }
//     return count;
//   }
//   console.log(countDuplicates(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
//   console.log(b)




// var arr=[10,20,30,15,20,10]
// b=[]
// c=0
// for(var i=0; i<=arr.length;){
//     if(arr[i]===arr[i+1]){
//         c++;
//         i=i+2
//     }
//     i++;  
// }

// console.log(c)



// arr=[12,34,56,789,0987,345]
// // op-[3,7,11,24,24,12]
// a=[]
// for(i of arr){
//     sum=0
//     for(j of String(i)){
        
//         sum=sum+Number(j)
//     }
//     a.push(sum)
// }
// console.log(a)


arr=[12,34,54,67,"javascript","js",4.6,7.8,5,6]
// // op-[12,34,54,67,5,6]

a=[]
for(i in arr){
    if(typeof(arr[i])==="number"){
        a.push(arr[i])
    }
}
console.log(a)


// arr=[123,145,12456,1456,18765,1234,1764]
// op=[how element first letter is that only should print such as[123,145,1234]]
 