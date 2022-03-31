const list=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
var k=[];
for(i of list){
for(j in i){
if (!k.includes(i[j])){
    k.push(i[j])
}
}
}
console.log(k)



