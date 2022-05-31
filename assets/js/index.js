"use strict";

function logMessage() {
  alert("message");
}

// const [button] = document.getElementsByTagName("button");
// button.addEventListener("click", logMessage);

// const id = 'unique'
// const unique = document.getElementById(id);
// unique.addEventListener("click", logMessage);

// const unique = document.querySelector("#unique");
// const btn1 = document.querySelector("button");

// const btns1 = document.getElementsByClassName("btn");
// const btns2 = document.querySelectorAll(".btn");

const img1 = document.querySelector('img');

const [img] = document.getElementsByTagName("img");

const [, text] = document.getElementsByClassName("text");

const li2 = document.querySelector('li:nth-child(2)');

const ps = document.querySelectorAll('#main p')