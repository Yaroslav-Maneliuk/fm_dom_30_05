"use strict";

// const pattern1 = /\b\w{4}\b/gi;
// const pattern2 = new RegExp("\\bw{4}\\\b", "gi");

const str = `qwe 1999god zxc 1288USD qwerty`;

const pattern1 = /\b(\d{4})[a-z]+\b/g;
const pattern2 = /\b(\d+)([A-Z]+)\b/g;
if (pattern2.test(str)) {
  // console.log(str.replace(pattern1, "$1 year"));
  console.log(str.replace(pattern2, "$2 $1"));
} else {
  console.log(2);
}
