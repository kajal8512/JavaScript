let n=require("readline-sync")
let prefect=n.question("Enter a number")
let temp =prefect
let sum=0;
let i=1;
while(i<prefect){
    if(prefect%i==0){
        sum+=i
    }
    i+=1
}
if(sum==temp){
    console.log(temp,"It's prefect no.")
}
else{
    console.log(temp,"It's not prefect no.")
}
