// Array of weekdays
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Array of month names
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the current date
const today = new Date();

// Extract the day, month, and year from the current date
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

// Format the date string
const dateString = `Today is ${weekdays[today.getDay()]}, ${day} ${monthNames[month]} ${year}.`;

console.log(dateString);

let cars = ["Opel", "Volvo", "VW"];
console.log(cars[1]); // Output: Volvo

cars.push("Ford");

for (let i = 0; i < cars.length; i++) {
  console.log(`${i + 1}. Entry: ${cars[i]}`);
}

cars.sort();

console.log("----- Sorted Array -----");

for (let i = 0; i < cars.length; i++) {
  console.log(`${i + 1}. Entry: ${cars[i]}`);
}
