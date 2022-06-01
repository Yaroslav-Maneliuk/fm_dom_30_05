"use strict";

function createCounter1() {
  let i = 0;
  return {
    increment() {
      return ++i;
    },
    decrement(){
      return --i;
    },
  };
}

const counter1 = createCounter1(10);
console.log(counter.increment());
console.log(counter.decrement());
