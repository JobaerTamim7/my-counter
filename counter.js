let countText = document.querySelector("#title");
let count = 0;
const addButton = document.querySelector("#countAdd");
const subButton  = document.querySelector("#countMinus");
const resetButton = document.querySelector("#reset");

subButton.onclick = sub;
addButton.onclick = add;
resetButton.onclick = reset;

function add(){
     count++;
     countText.innerText = count;
}

function sub(){
    if(count>0){
        count--;
        countText.innerText = count;
    }
}


function reset(){
    count = 0;
    countText.innerText = count;
}