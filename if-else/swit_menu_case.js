var food = require("readline-sync")
var days = food.question("Enter a day")
var menu = food.question("Breakfast,Lunch,Dinner")

switch(days){
    case ("monday"):
        switch(menu){
            case("Breakfast"):
                console.log("phoha");
                break;
            case("Lunch"):
                console.log("Daal Roti");
                break;
            case("Dinner"):
                console.log("chhole Chaval");
        }
    break;
    case ("tuesday"):
        switch(menu){
            case("Breakfast"):
                console.log("Sabudane");
                break;
            case("Lunch"):
                console.log("paneer rotti");
                break;
            case("Dinner"):
                console.log("chicken")
                break;
        }
    break;
    case ("wednesday"):
        switch(menu){
            case("Breakfast"):
                console.log("paou bhaji");
                break;
            case("Lunch"):
                console.log("biryani");
                break;
            case("Dinner"):
                console.log("rajma chaval");

        }
        break;
    case ("Thursday"):
        switch(menu){
            case("Breakfast"):
                console.log("daaliya");
                break;
            case("Lunch"):
                console.log("veg pulao");
                break;
            case("Dinner"):
                console.log("biryani");
    
        }
        break;
    case ("Friday"):
        switch(menu){
            case("Breakfast"):
                console.log("sandswitch");
                break;
            case("Lunch"):
                console.log("chole chawal");
                break;
            case("Dinner"):
                console.log("veg biryani");
        }
    break;
    case ("saturday"):
        switch(menu){
            case("Breakfast"):
                console.log("bhaji");
                break;
            case("Lunch"):
                console.log("palak");
                break;
            case("Dinner"):
                console.log("govi");
    
        }
        break;   
    case ("Sunday"):
    switch(menu){
        case("Breakfast"):
            console.log("halwa");
            break;
        case("Lunch"):
            console.log("daal roti");
            break;
        case("Dinner"):
            console.log("egg");
                
    }
    break;
}