var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var count_crorepati=0;
var count_lakhpati=0;
var count_dilwale=0;
for (var i of kitna_paisa_hai){
    if(i>=10000000){
        count_crorepati+=1
    }
    else if(i>=100000){
        count_lakhpati+=1
    }
    else{
        count_dilwale+=1
    }
}
console.log(count_crorepati,"crorepati_hai")
console.log(count_lakhpati,"lakhpati_hai")
console.log(count_crorepati,"dilwale_hai")



