"use strict";

const user = {
  name: "Elon",
  surname: "Musk",
  age: 50,
  getfullName() {
    return `${this.name} ${this.surname}`;
  },
  isMale: true,
  pet: undefined,
  isUkraine: null,
  [Symbol("test")]: 123,
  children: ["one", "two"],
  cars: {
    car1: { color: "red" },
    car2: { color: "pink" },
  },
};

console.log(user);
const serializeUser = JSON.stringify(user);
console.log(serializeUser);


const deserializeUser = JSON.parse(serializeUser);
console.log(deserializeUser);


const user2 = {
  name: "Tim",
  surname: "Cook",
  age: 61,
  getfullName() {
    return `${this.name} ${this.surname}`;
  },
  isMale: true,
  pet: undefined,
  isUkraine: null,
  [Symbol("test")]: 123,
  brothers: {
    brothers1: { brotherName: "Gerald Cook" },
    brothers2: { brotherName: "Michael Cook" },
  },
};

console.log(user2);
const serializeUser2 = JSON.stringify(user2);
console.log(serializeUser2);


const deserializeUser2 = JSON.parse(serializeUser2);
console.log(deserializeUser2);