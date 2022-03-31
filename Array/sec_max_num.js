var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
max=0;
sec_max=0;
for(var i=0; i<=numbers.length; i++){
    if(max<numbers[i]){
    if(sec_max<max){
        sec_max=max
    }
max=numbers[i]
}
else{
    if (sec_max<numbers[i]){
    sec_max=numbers[i];
    }
    }
}
console.log(sec_max)  
    
