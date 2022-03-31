// program to show try...catch in a program

// var a=5;
// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);

//     // forgot to define variable a      
//     console.log(a);
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }



const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}
