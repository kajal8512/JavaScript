function check_numbers_list(list1,list2){
    for(var i=0; i<list1.length; i++){
        if(list1[i]%2==0 && list2[i]%2===0){
            console.log("both are even")
        }else{
            console.log("both are not even")
        }
    }
}
check_numbers_list([1,4,5,6],[7,6,5,4])