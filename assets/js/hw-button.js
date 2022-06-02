"use strict";

const hwButton = document.getElementById("hw-button");

function hwButtonHandler() {
  hwButton.removeEventListener("click", hwButtonHandler);
  hwButton.disabled = true;
}

hwButton.addEventListener("click", hwButtonHandler);

