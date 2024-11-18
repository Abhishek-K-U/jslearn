let count = 0;
let countEl = document.getElementById("cal-el");
let prText = document.getElementById("pre-text");
let erbtn=document.getElementById("error");
function incriment(){
    if(count<10){
    count += 1
    countEl.textContent= count
    }
    else{
        countEl.textContent= 0
        window.alert("item are full")
        save()
    }
}

function save(){
    let countStr = count + ","
    prText.textContent += countStr 
    countEl.textContent= 0
    count = 0
}

function error(){
    
    prText.textContent = "Somthing went Wrong!!!!!"
}