"use strict";

const hwButton = document.getElementById("hw-button");

function hwButtonHandler() {
  hwButton.removeEventListener("click", hwButtonHandler);
  hwButton.disabled = true;
}

hwButton.addEventListener("click", hwButtonHandler);

// var count = 0;
// function clickButton() {
//   count += 1;
//   document.getElementById("hw-button").innerHTML = count;
// }
// console.log(count)


