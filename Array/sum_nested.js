// var marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]

// var sum =0;
// for(var i of marks){
//     for(var j of i){
//         sum=sum+j
//     }
// }
// console.log(sum)


var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
var new_list=[]
for(var i of n){
    for (var j of n){
        if(i+j == number){
            new_list.push([i,j])
        }
    }
    
}
console.log(new_list)


// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var odd_numbers=0;
// var even_numbers=0;
// for(var i of elements){
// if(i%2 ===0){
// even_numbers+=1
// }
// else{
// odd_numbers+=1
// }
// }
// console.log("odd",odd_numbers);
// console.log("even",even_numbers);

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];

// var sum_odd_numbers=0;
// var sum_even_numbers=0;
// for(var i of elements){
//     if(i%2 === 0){
//         sum_even_numbers+=i
//     }
//     else {
//         sum_odd_numbers+=i
//     }
// }
// console.log("sum_even",sum_even_numbers)
// console.log("sum_of_odd",sum_odd_numbers)
// console.log(("Average",sum_even_numbers+sum_odd_numbers)/2)

    





    
