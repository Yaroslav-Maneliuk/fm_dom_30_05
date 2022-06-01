"use strict";

function createCounter2(initial = 0) {  //closure
  return function counter() {
    return ++initial;
  };
}

function createCounter1() {
  let i = 0; //closure
  return function counter() {
    return ++i;
  };
}

const counter1 = createCounter1();
const counter2 = createCounter2(10);  //let initial = 10;
console.log(counter());
