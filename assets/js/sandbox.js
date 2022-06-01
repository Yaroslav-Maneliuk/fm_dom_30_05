"use strict";

// function createCounter1() {
//   let i = 0;
//   return {
//     increment() {
//       return ++i;
//     },
//     decrement(){
//       return --i;
//     },
//   };
// }

// const counter1 = createCounter1(10);
// console.log(counter1.increment());
// console.log(counter1.decrement());

//---------------------------------------//
// function createAdder(n) {
//   // let sum = n;
//   return function adder(m) {
//     return (n += m);
//   };
// }

//---------------------------------------//

// function createAdder(n) {
//   return (m) => (n += m);
// }

//---------------------------------------//

const createAdder = ((n) => (m) => (n += m));

const adder = createAdder(100);
console.log(adder(15));
console.log(adder(10));
