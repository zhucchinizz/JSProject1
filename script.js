function init(){
    var pennies = 0;
    var nickels = 0;
    var dimes = 0;
    var quarters = 0;
}
function add(text){
    if(text==quarters){
        quarters++;
    }
    if(text==dimes){
        dimes++;
    }
    if(text==nickels){
        nickels++;
    }
    if(text==pennies){
        pennies++;
    }
    function subtract(text){
        if(text==quarters){
            quarters--;
        }
        if(text==dimes){
            dimes--;
        }
        if(text==nickels){
            nickels--;
        }
        if(text==pennies){
            pennies--;
        }
    }
}