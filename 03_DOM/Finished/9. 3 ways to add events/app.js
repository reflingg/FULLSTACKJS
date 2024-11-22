// ----------- BAD WAY 2-----------
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = function () {
//   alert("Hello World");
// };

// ----------- GREAT WAY-----------
// const best = document.querySelector(".best");

// best.addEventListener("click", () => {
//   alert("Yellow");
// });  /// Arrow function

// OR

// function greet() {
//   alert("Yellow");
// }
// best.addEventListener("click", greet);

// ----------- Event (e) Object -----------
// It's an event object which contains information about perticular event.

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert(input.value);
// });
