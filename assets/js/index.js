"use strict";

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   //while(true){}
// });

// console.log(1);
// setTimeout(() => {
//   console.log(3);
// }, 1500);
// console.log(2);

// const identificator = setTimeout(() => {
//   console.log("hi");
// }, 200);
// clearTimeout(identificator);

const logNumberWithDelay = function () {
  let count = 0;
  const identificator = setInterval(() => {
    console.log(count++);
    if (count > 10) {
      clearInterval(identificator);
    }
  }, 300);
};
console.log(logNumberWithDelay())

// function a(){
//   for(let i = 0; l<10; i++){
//     console.log(a);
//   }
// }
