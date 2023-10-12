function init(){
    pennynum = 0;
    pennies=document.getElementById('sump');
    nickelnum = 0;
    nickels=document.getElementById('sumn');
    dimenum = 0;
    dimes=document.getElementById('sumd');
    quarternum = 0;
    quarters=document.getElementById('sumq');
    money=0;
    money=document.getElementById('sum');
    valuep=document.getElementById('pvalue')
    valuen=document.getElementById('nvalue')
    valued=document.getElementById('dvalue')
    valueq=document.getElementById('qvalue')
    dipslay();
}
function add(text){
    if(text=='quarters'){
        quarternum++;
    }
    if(text=='dimes'){
        dimenum++;
    }
    if(text=='nickels'){
        nickelnum++;
    }
    if(text=='pennies'){
        pennynum++;
    }
    dipslay();
}
function subtract(text){

    if(text=='quarters' && quarternum>0){
            quarternum--;
     }
    if(text=='dimes' && dimenum>0){
        dimenum--;
    }
     if(text=='nickels' && nickelnum>0){
        nickelnum--;
    }
     if(text=='pennies' && pennynum>0){
        pennynum--;
    }
    dipslay();
    }


function dipslay(){
    total=pennynum+(5*nickelnum)+(10*dimenum)+(25*quarternum);
    pennies.innerHTML=pennynum;
    nickels.innerHTML=nickelnum;
    dimes.innerHTML=dimenum;
    quarters.innerHTML=quarternum;
    money.innerHTML=total;
    valuep.innerHTML=pennynum;
    valuen.innerHTML=nickelnum*5;
    valued.innerHTML=dimenum*10;
    valueq.innerHTML=quarternum*25;
}

sum.textContent='Total: ${total}';
