let jetzt = new Date();
let GebTag = new Date(1998, 7, 5);
let alter = jetzt.getFullYear() - GebTag.getFullYear();

if (jetzt.getMonth() < GebTag.getMonth() || (jetzt.getMonth() === GebTag.getMonth() && jetzt.getDate() < GebTag.getDate())) {
    alter--;
  }

// Prompt method to enter age
// let alter = prompt("Please enter your age:");
console.log(alter);
