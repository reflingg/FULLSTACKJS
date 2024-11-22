// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from
// data-structures (Arrays, objects)
// into separate distinct variables.

// --------------------------------
// Basic variable assignment
// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"
// --------------------------------

// --------------------------------
// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); //undefined
// --------------------------------

// --------------------------------
// DEFAULT VALUES
// let a, b;

// [a = 5, b = 7] = [1];
// console.log(a); // 1
// console.log(b); // 7

// // --------------------------------
// // Swapping variables
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]
// // --------------------------------

// // --------------------------------
// // Parsing an array returned from a function
// function f() {
//   return [1, 2];
// }

// let a, b;
// [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2
// // --------------------------------

// // --------------------------------
// // Ignoring some returned values
// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1
// // --------------------------------

// // --------------------------------
// Assigning the rest of an array to a variable
// const [a, ...b] = ["one", "two", "three"];
// console.log(a); // 1
// console.log(b); // [2, 3]
// // --------------------------------

///////////////////// Exercise /////////////
const colors = ["red", "green", "blue", "yellow", "orange"];

// Your task is to use array destructuring to extract the first three
// colors from the colors array and assign them to separate variables named color1,
// color2, and color3.
// After extracting the colors, log each variable's value to the console.

const [color1, color2, color3] = colors;
console.log(color1, color2, color3);
