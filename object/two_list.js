var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5,]
var obj={}
for(i in list1){
    obj[list1[i]]=list2[i]
}
console.log(obj)

