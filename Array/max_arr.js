// arr=[[1,3,4],[4,5,6],[6,7,8,5,6,7],[2,3,4,5]]


dic ={"a":100,"b":200,"c":300,"f":300,}
dict = {"a":200,"b":300,"c":200,"d":200,"e":600}
// d={}
for(i in dic){
    if(i in dict){
        dict[i]=dic[i]+dict[i]
    }else{
        dict[i]=dic[i]
        }
}

console.log(dict)

