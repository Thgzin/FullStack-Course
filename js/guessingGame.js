let maximum = parseInt(prompt("enter the maximum number!"));
while (!maximum || maximum <= 0) {
  maximum = parseInt(prompt("enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess");
    attempts++;
  } else {
    guess = prompt("Invalid guess! Please enter a number or 'q' to quit");
  }
}
if (guess === "q") {
  console.log("You quit the game!");
} else {
  console.log(`YOU GOT IT It took you ${attempts} guesses`);
}
