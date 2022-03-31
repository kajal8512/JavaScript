/*var question_list = ["How many continents are there?",               
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"     
]

var options_list = [
    // pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    // second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    // third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]

// har ek question ke liye, uski solution key (yeh index nahi hai)
var solution_list = [3, 4, 1] 
var answer_list=[
    ["(1)four","(3)seven"],
    ["(4)Delhi","(2)Bhopal"],
    ["(4)Agricultue","(1)Software Engineering"]
]
console.log("****Welcome to KBC....Game****")
let n=require("readline-sync")

var i=0;
var s=0;
var count = 0;
while (i<question_list.length){
    console.log(question_list[i])

    var a=0;
    var b=i
    while (a<options_list[i].length){
        var k=(options_list[b][a])
        console.log(a+1,k)
        a++;
    }
    var life_line =n.questionInt("Do you want 50-50 life-line")
    if(life_line==="yes"){
        console.log("50-50 life-line")
        if (count<1){
            console.log(answer_list[b])
            var answer1 = n.questionInt("Enter your answer..")
            if(answer1===solution_list[i]){
                s+=1000
                console.log("your answer is correct \n you win Rs/",s)
                count++;
            }else{
                console.log("your answer is wrong \n you can't play more")
                count++;
                break
            }
            
        }else{
            console.log("you already use 50-50 lifeline")
            var answer2=n.questionInt("Enter your answer..")
            if(answer2==solution_list[i]){
                s+=1000
                console.log("your answer is correct \n you win Rs/",s)
            }else{
                console.log("your answer is wrong \n you can't play more")
                break
            }  
        } 
    }else{
        var answer3=n.questionInt("Enter your answer..")
        if(answer3===solution_list[i]){
            s+=1000
            console.log("your answer is correct \n you win Rs/",s)
        }else{
            console.log("your answer is wrong \n you can't play more")
            break
        }
    }
    i++;
}
console.log("***thanks for being the part of KBC game***")
console.log("you win",s,"Rs")*/
        



var question_list = [
    "1.How many continents are there?",             
    "2.What is the capital of India?",            
    "3.NG mei kaun se course padhaya jaata hai?"   
]

var options_list = [
    // pehle question ke liye options
    ["1.Four", "2.Nine", "3.Seven", "4.Eight"],
    // second question ke liye options
    ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
    // third question ke liye options
    ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]
]
var solution_list = [3, 4, 1]

var answer_list=[
    ["(4),eight","(3),seven"],
    ["(1),Chandigarh","(4),Delhi"],
    ["(1),software engineering","(2),counseling"]
]
console.log("*****welcome to the KBC*****")
let n=require("readline-sync");``

var i=0
var sum=0
var count=0
while (i<question_list.length){
    console.log(question_list[i])
    var j=0;
    var a=i;
    while(j<options_list[i].length){
        var k=(options_list[a][j])
        console.log(j+1,k)
        j++
    }
    var lifeline=n.question("if u want 5050 lifeline yes or no:-");
    if(lifeline=="yes"){
        console.log("5050 lifeline")
        if(count<1){
            console.log(answer_list[a])
            var answer_1=n.questionInt("enter your answer1:-")
            if(answer_1===solution_list[i]){
                sum=sum+10000
                console.log("congratulation your answer is correct,you won",sum,"Rs")
                count++
            }else{
                console.log("sorry your answer is wrong,you will not play,you won",sum,"Rs")
                count++
                break
            }
        }else{
            console.log("you can't use lifeline")
            var answer_2=n.questionInt("enter your answer2:-")
            if(answer_2===solution_list[i]){
                sum=sum+10000
                console.log("congratulation your answer is correct,you won",sum,"Rs")
            }else{
                console.log("sorry your answer is wrong,you will not play,you won",sum,"Rs")
                break
            }
        }
    }else{
        var answer_3=n.questionInt("enter your answer3:-")
        if(answer_3===solution_list[i]){
            sum=sum+10000
            console.log("congratulation your answer is correct,you won",sum,"Rs")
        }else{
            console.log("sorry your answer is wrong,you will not play,you won",sum,"Rs")
            break
        }
    }
    i++
}
console.log("***thanks for being the part of KBC game***")
console.log("you win",sum,"Rs")



