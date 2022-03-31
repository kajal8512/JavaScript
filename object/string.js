const str="MISSISSIPPI"
let list = [];
let obj ={};
for(i of str){
    if(list.includes(i)){
        obj[i]=obj[i]+1
    }
    else{
        list.push(i)
        obj[i]=1
    }
}
console.log(obj)




