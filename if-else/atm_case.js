var atm = require("readline-sync")
var card = atm.question("Insert your card (debit or credit card)")
var currnt_balance = 20000
if (card == "debit" || card == "credit"){
    console.log("Please wait it's processing");
    
    var Language = atm.question("select a language \n Hindi or English")
    if (Language == "English"){
        console.log("you select English language")
    
        var pin =atm.question("Enter your four digit pin number")
        if (pin == 4444){
            console.log("Yeah, It's correct pin go ahead");
        
            var def_tscn = atm.question("choose the type of transection...(Withdarawl , Deposit , transfer of money)")
            if (def_tscn == "withdarawl"){
                console.log("you have selected withdarawl option");
            
                var Account =atm.question("Select you account(saving account or current account)")
                if (Account == "saving a/c"){
                    console.log("you have selected saving a/c");
                
                    var Amount = atm.question("Enter the withdarawl amount")
                    if (Amount >=100 && Amount <= 5000){
                        console.log("your withdarawl amount is",Amount)
                        console.log("your rest amount is", currnt_balance-Amount)

                    }else{
                        console.log("there is something wrong please try again");
                    }

                }else{
                    console.log("you choose currnt account")
                }
                
            
            }else{
                console.log("you have selected Deposit option");
            }
        }else {
            console.log("your pin is wwrong")
        }

    }else if (Language == "Hindi"){
        console.log("aap ne Hindi chuna.. hai");
    
        var pin =atm.question("apne chaar anko ke pin likho..")
        if (pin == 4444){
            console.log("sahi hai, aap age bahdiy...");
        
            var def_tscn = atm.question("koi ek inme se chuniy...(Withdarawl , Deposit of money)")
            if (def_tscn == "withdarawl"){
                console.log("apne withdarawl option ko chuna.. hai");
            
                var Account =atm.question("account chune..(saving account or current account)")
                if (Account == "saving a/c"){
                    console.log("aap ne saving a/c ko chuna..");
                
                    var Amount = atm.question("kitna amount chhaiy.. apko amount likho")
                    if (Amount >=100){
                        console.log(Amount,"aapne kul amount");
                        console.log("apke bache huay amount",currnt_balance-Amount)
                    
                    }else{
                        console.log("something you did wrong please try again")
                    }
                }else{
                    console.log("you choose currnt a/c")
                }
            }else{
                console.log("you have to choose withdarawl option")
            }
        }else{
            console.log("your pin is wrong")
        }
    }else{
        console.log("you should choose correct language")
    }
}
