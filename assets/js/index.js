"use strict";

const [link] = document.links;
link.addEventListener('click', (e)=>{
  e.preventDefault();
})

const form = document.forms.rootForm;

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // console.log(e)
  console.log(e.target.elements.inputText)
  console.dir(e.target.elements.inputText)
})