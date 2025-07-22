/*const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
const whisper = message.toLowerCase().trim();
console.log(whisper);
*/

/*
const word = "skateboard"; //Don't change this line!

const changeWord = word.slice(5);
const facialHair = changeWord.replace("o", "e");

console.log(facialHair);
*/

/*
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
console.log(roll);
*/

/*
function isEven(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    return;
  }
}
isEven(4);
function isOdd(num) {
  if (num % 2 === 1) {
    console.log("Odd");
  } else {
    return;
  }
}
isOdd(3);
*/

/*
function getColor(phrase) {
  if (phrase === "stop") {
    console.log("red");
  } else if (phrase === "slow") {
    console.log("yellow");
  } else if (phrase === "go") {
    console.log("green");
  } else {
    console.log("purple");
  }
}

getColor("stop");
*/

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}
