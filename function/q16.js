function perfect_number(num){
    var sum=0;
    for(var i=0; i<num; i++){
        if(num%i===0){
            sum=sum+i
        }
    }if(sum===num){
        console.log("it's perect number")
    }else{
        console.log("it's not perfect number")
    }

}
perfect_number(6)