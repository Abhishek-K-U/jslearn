
let myleads = ["abhi", "ram", "shek"];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");



const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value);
})


for( let i = 0; i<myleads.length; i++){
    ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
}


// practise
// let containerEl = document.getElementById("continer");

// containerEl.innerHTML = "<button id='buy-btn'>BUY!</button>";

// let buyBtn= document.getElementById("buy-btn");
// buyBtn.addEventListener('click', function(){
//     containerEl.innerHTML += "<p>Thank you for Buying :)</p>"
// })

