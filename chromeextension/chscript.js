
let myleads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");



const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value);
    inputEl.value = ""
    renderleads();
})

function renderleads(){
    let listItems = "";
    for( let i = 0; i<myleads.length; i++){
        // listItems += "<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>" 
        listItems += `
        <li>
            <a target='_blank' href='${myleads[i]}'>
                ${myleads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML= listItems;
}

// practise
// let containerEl = document.getElementById("continer");

// containerEl.innerHTML = "<button id='buy-btn'>BUY!</button>";

// let buyBtn= document.getElementById("buy-btn");
// buyBtn.addEventListener('click', function(){
//     containerEl.innerHTML += "<p>Thank you for Buying :)</p>"
// })

