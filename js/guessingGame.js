let maximum = parseInt(prompt("enter the maximum number!"));
while (!maximum || maximum <= 0) {
  maximum = parseInt(prompt("enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
while (guess !== targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high! Enter a new guess"));
  } else {
    guess = parseInt(prompt("Too low! Enter a new guess"));
  }
}
console.log("YOU GOT IT");
