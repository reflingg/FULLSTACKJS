// Arrow functions, also known as fat arrow functions,
//  are a concise and shorter way to define functions in JavaScript.
//  They were introduced in ECMAScript 6 (ES6)
// and provide a more compact syntax compared to traditional
// function expressions

// function greet(username) {
//   return `Hello ${username}`;
// }

// console.log(greet("Moses"));

//----- Arrow Function -----
// greet = (username) => {
//   return `Hello ${username}`;
// };

// console.log(greet("Moses"));

// ----------------------------
// const greet = (username) => `Hello ${username}`;
// console.log(greet("Moses"));
// ----------------------------

// function double(number) {
//   return number * 2;
// }

// const double = (number) => number * 2;
// console.log(double(5));

////////// Exercise /////////
// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(() => {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("Hey");
//     setTimeout(() => {
//       console.log("Namaste");
//       setTimeout(() => {
//         console.log("Hi");
//         setTimeout(() => {
//           console.log("Bonjour");
//           setTimeout(() => {
//             console.log("Salam");
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);
