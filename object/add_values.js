var dic1={1:10, 2:20}
var dic2={3:30,2:40}
var dic3={5:50,6:60}

for(i in dic1){
    if (i in  dic2){
        dic2[i]=dic1[i]+dic2[i]
    }else{
        dic2[i]=dic1[i]
    }
}
for(i in dic2){
    if (i in dic3){
        dic3[i]=dic2[i]+dic3[i]
    }else{
        dic3[i]=dic2[i]
    }
}
console.log(dic3)
