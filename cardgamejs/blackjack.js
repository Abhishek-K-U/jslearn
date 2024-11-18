
let sum= 0;
let wiinertrack = false;
let isalive = false;

let message=""
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el")

let cards = [];

let playerEl=document.getElementById("player-el");

let player = {
    name: "Player",
    chips: 100
}

playerEl.textContent= player.name + ": $" + player.chips;

function randomCard(){
    // return Math.random()*6;
    let randomCard = Math.floor(Math.random()*13)+1;
    if (randomCard > 10){
        return 10;
    } else if(randomCard === 1){
        return 11;
    }else{
        return randomCard;
    }
}

function startGame(){
    isalive= true;
    let firstCard = randomCard();      
    let secondCard = randomCard();
    cards= [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
// or......................................
// let sumEl=document.querySelector("#sum-el");
function renderGame(){
    sumEl.textContent= "Sum: " + sum
    cardsEl.textContent="Cards: ";
    for(let i = 0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    if(sum<=20){
        message="You are two close ";
    }
    else if(sum===21){
        message="You won ";
        wiinertrack = true;

    }
    else{
        message="You loose b***h"
        isalive = false;
    }
    messageEl.textContent=message;
}
function newCard(){ 
    if(isalive ===  true && wiinertrack===false){
            let card = randomCard();
            sum +=card;
            cards.push(card);
            renderGame();
    }
 
}

// let a=["hello","hai","how","are","you"];
// let me=document.getElementById("testpara");

// for (let i = 0; i<a.length; i++){
//     me.textContent+=a[i]+" ";
//     // me.textContent += a[i]
// }
