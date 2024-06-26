const amount = document.querySelector (".amount");
const tip = document.querySelector(".percentage");
const btn = document.querySelector(".calculate");
const total = document.querySelector(".Total");

function calculateTotal (){
    const bill = amount.value;
    const tips = tip.value;
    const totalBill = bill*( 1 + tips / 100);
    total.innerText = `$ ${totalBill}`;
}

