// Default function parameters,
// introduced in ECMAScript 6 (ES6),
// allow you to assign default values to
// function parameters. When a function is called,
// and an argument is not provided for a parameter,
// the default value will be used instead.
// This feature makes it easier to handle cases
// where arguments might be missing or undefined.

// function countTo5(count = false) {
//   if (count === true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`Count: ${i}`);
//     }
//   }
// }

// countTo5(true);

// function rating(rate = 0) {
//   if (rate === 5) {
//     console.log("High Rating :)");
//   } else if (rate === 0) {
//     console.log("Low Rating :(");
//   }
// }

// rating(5);

//////////// Exercise ///////////
// 1. Create function name (multiply)
// with 2 parameters (a,b)
// which will multiply the parameter
// 2. provide 1 as the default value to parameter "b"

// function multiply(a, b = 4) {
//   return a * b;
// }
// console.log(multiply(8, 2));

// ---------------------------
// 1. Create a function name (append)
// it will take 2 parameters (value, array)
// 2. The default value of parameter
// "array" will be [].

// function append(value, array = []) {
//   array.push(value);
//   return array;
// }
// console.log(append(2));
