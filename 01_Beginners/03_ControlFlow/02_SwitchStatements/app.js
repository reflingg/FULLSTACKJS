// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// let x = "0";

// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }

// -------------------------------------------------

// let day = prompt("What day of the week is it?");

// switch (day) {
//   case "monday":
//     console.log("Today is monday");
//     break;
//   case "tuesday":
//     console.log("Today is tuesday");
//     break;
//   case "wednesday":
//     console.log("Today is wednesday");
//     break;
//   case "thursday":
//     console.log("Today is thursday");
//     break;
//   case "friday":
//     console.log("Today is friday");
//     break;
//   case "saturday":
//     console.log("Today is saturday");
//     break;
//   case "sunday":
//     console.log("Today is sunday");
//     break;
//   default:
//     console.log("Don't know what day is that!");
// }

// Prompt the user to enter a number for the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// let userDay = prompt(
//   "Enter a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday):"
// );

// // Convert the input to a number
// userDay = Number(userDay);

// // Variable to hold the message
// let message;

// // Use the switch statement to display a message based on the user's input
// switch (userDay) {
//   case 0:
//     message = "You selected Sunday! Take a rest.";
//     break;
//   case 1:
//     message = "You selected Monday! Start your week strong!";
//     break;
//   case 2:
//     message = "You selected Tuesday! Keep up the momentum!";
//     break;
//   case 3:
//     message = "You selected Wednesday! You're halfway through the week!";
//     break;
//   case 4:
//     message = "You selected Thursday! Almost the weekend!";
//     break;
//   case 5:
//     message = "You selected Friday! Time to wind down!";
//     break;
//   case 6:
//     message = "You selected Saturday! Enjoy your weekend!";
//     break;
//   default:
//     message = "Invalid input! Please enter a number between 0 and 6.";
// }

// // Display the message in the HTML element with id "day-message"
// document.getElementById("day-message").innerHTML = message;

//// EXERCISE ////

// let fruit = "Banana";

// switch (fruit) {
//   case "Banana":
//     console.log("Banana is good!");
//     break;
//   case "Orange":
//     console.log("I am not a fan of oranges!");
//     break;
//   case "Apple":
//     console.log("How you like them apples!");
//     break;
//   default:
//     console.log("I have never heard of that fruit.");
// }
