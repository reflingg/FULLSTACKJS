// In object destructuring order doesn't matter but the name
// does matter

// --------------------------
// Extracting a property
// const student = { name: "Moses", position: "First", rollNo: "7" };
// const { name, position, rollNo } = student;
// console.log(name); // HuXn
// console.log(position); // First
// console.log(rollNo); // 7

// --------------------------

////////////// Exercise /////

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.
const { name, age, gender, country } = person;
console.log(name);
console.log(age);
console.log(gender);
console.log(country);
