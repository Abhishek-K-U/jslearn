
let myleads = [];

// let myleads =`["anab"]`
// myleads = JSON.parse(myleads);
// myleads.push("abhi")
// myleads = JSON.stringify(myleads);


const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn =document.getElementById("tab-btn");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromlocalstorage = JSON.parse(localStorage.getItem("myleads"));

if(leadsFromlocalstorage){
    myleads = leadsFromlocalstorage;
    render(myleads);
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myleads = [];
    render(myleads);
})

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myleads", JSON.stringify(myleads));
    render(myleads);
})


tabBtn.addEventListener("click", function(){
    chrome.tabs.querry({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads));
        render(leads)
    })
})


function render(leads){
    let listItems = "";
    for( let i = 0; i<leads.length; i++){
        // listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + myleads[i] + "</a></li>" 
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
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

