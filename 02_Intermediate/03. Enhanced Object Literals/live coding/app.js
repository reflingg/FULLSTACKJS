// Enhanced object literals, introduced
// in ECMAScript 6 (ES6), are a set of enhancements
// to the syntax for defining objects in JavaScript.
// These enhancements make it more convenient and concise
// to define object properties and methods

// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     intro: () => {
//       console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
//     },
//   };
// }

// const Moses = user("Moses", 20, "Programmer");
// Moses.intro();

///////////////// Exercise ////////////
// 1. REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// (obj.a = 1), (obj.b = 2), (obj.c = 3);

// const user = (a, b, c) => {
//   return {
//     a: a,
//     b: b,
//     c: c,
//     pick: () => {
//       console.log(`I choose ${a},${b},${c},`);
//     },
//   };
// };
// const form = user(1, 2, 3);
// form.pick();
// 2. ES5 CODE
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3));
// console.log(lib.mult(2, 3));
//
//
// ES6 CODE Answer
// const lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
// };
// console.log(lib.sum(2, 3));
// console.log(lib.mult(2, 3));

//// 3.
// function getPersonES5(name, age, height) {
//   return {
//     name,
//     age,
//     height,
//   };
// }
// getPersonES5("Zachary", 23, 195);
// { name: 'Zachary', age: 23, height: 195 }

// function getPersonES6(name, age, height) {
//   return { name, age, height };
// }
// const mes = getPersonES6("Moses", 20, 5.8);
// console.log(mes);
