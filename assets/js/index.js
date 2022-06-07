"use strict";

const messages = [];
const form = document.forms.rootForm;
const list = document.getElementById('list');

const pattern = /^([A-Z][a-z]+ [A-Z]\.)|([А-Я][а-я]+ [А-Я]\.)$/g

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  //при нажатии на кнопку Send добавлять значение из инпута в массив
  //в том случае если оно не пустое
  const inputValue = e.target.elements.inputText.value.trim();
  if(pattern.test(inputValue)){
    messages.push(inputValue);
    //добавить автоматическую очистку формы
    e.target.reset();
  }
  //HOMEWORK
  //рендерить  в список все сообщения из массива
  console.log(messages);
})