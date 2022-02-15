"use strict";
const totalParagraph = document.querySelector(".total");
// const totalParagraph = document.querySelector(".total");
// // const cola = document.querySelector(".cola-button");
// // const peanut = document.querySelector(".peanut-button");
// // const chocolate = document.querySelector(".chocolate-button");
// // const gummy = document.querySelector(".gummy-button");
// let total = 0;

const snackButtons = document.querySelectorAll(".snack-button");
let total = 0;
console.dir(totalParagraph);

// cola.addEventListener("click", () => {
//   total += 2;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
// });

// peanut.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
// });

// chocolate.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
// });

// gummy.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
// });

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost");
    total += parseInt(cost);
    console.log(total);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

//MY ATTEMPT AT A SOLUTION
const penny = document.querySelector(".penny");
const nickel = document.querySelector(".nickel");
const dime = document.querySelector(".dime");
const quarter = document.querySelector(".quarter");

const coinForm = document.querySelector(".coin-form");
const bank = document.querySelector(".bank");

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const howMany = document.querySelector("#howMany").value;
  const whichCoin = document.querySelector("#whichCoin").value;
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});
