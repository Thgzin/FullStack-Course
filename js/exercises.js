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

/*
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
*/
/*
const mystery = "Pretty7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}
*/

/*
const lottoNumbers = [1, 2, 3, 4, 5, 6];
*/

/*
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
*/
/*
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);
*/

/*
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];
airplaneSeats[3][1] = "Hugo";
console.log(airplaneSeats);
*/
/*
  const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"],
  };
  console.log(product);
*/
/*
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress);
*/
/*
for (let i = 1; i <= 6; i++) {
  console.log("Da ba dee da ba daa");
}

/*
for (let i = 25; i >= 0; i-=5) {
  console.log(i);
}
*/

/*
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
*/

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  console.log(num * num);
}
*/

/*
function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}
rant("I HATE BEETS");
*/

/*
function isSnakeEyes(n1, n2) {
  if (n1 === 1 && n2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

isSnakeEyes(2, 3);
isSnakeEyes(1, 1);
*/

/*
function multiply(n1, n2) {
  return n1 * n2;
}
console.log(multiply(2, 3));
*/

/*
function isShortsWeather(temp) {
  if (temp >= 75) {
    return true;
  } else {
    return false;
  }
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));
*/

/*
function lastElement(el = []) {
  if (el == "") {
    return null;
  } else {
    const lastIndex = el[el.length - 1];
    return lastIndex;
  }
}
console.log(lastElement());
console.log(lastElement([3, 5, 7]));
*/

/*
function capitalize(string) {
  let str = string;
  const firstLetter = str[0].toUpperCase();
  str = str.slice(0, 0) + str.slice(1);
  return `${firstLetter + str}`;
}
console.log(capitalize("eggplants"));
*/

/*
function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3]));
*/

/*
function returnDay(number) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (number === 1) {
    return daysOfWeek[0];
  } else if (number === 2) {
    return daysOfWeek[1];
  } else if (number === 3) {
    return daysOfWeek[2];
  } else if (number === 4) {
    return daysOfWeek[3];
  } else if (number === 5) {
    return daysOfWeek[4];
  } else if (number === 6) {
    return daysOfWeek[5];
  } else if (number === 7) {
    return daysOfWeek[6];
  } else if (number <= 0 || number >= 8) {
    return null;
  }
}

console.log(returnDay(6));
*/

/*
const square = function (x) {
  return Math.pow(x, 2);
};
console.log(square(10));
*/

/*
const square = {
  area(side) {
    return Math.pow(side, 2);
  },
  perimeter(side) {
    return side * 4;
  },
};

console.log(square.area(10));
console.log(square.perimeter(10));
*/

/*
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);

*/

//Square(n) Sum
/*
function squareSum(numbers) {
  const total = numbers
    .map((value) => Math.pow(value, 2))
    .reduce((acc, val) => acc + val,0);
  return total;
}

console.log(squareSum([1, 2, 2]));
*/

/*
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Adam"));
*/

/*
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(2));
*/

/*
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map((e) => {
  return e.first;
});

console.log(firstNames);
*/

const greet = (person) => {
  return `Hey ${person}!`;
};

console.log(greet("Hagrid"));
