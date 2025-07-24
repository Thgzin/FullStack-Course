const arr = [];
let p = prompt("What would you like to do?");

while (p !== "quit") {
  if (p === "new") {
    let newTodo = prompt("Enter new todo");
    arr.push(newTodo);
    console.log(`${newTodo} added to list`);
  } else if (p === "list") {
    if (arr.length === 0) {
      newTodo = prompt("Please, first enter a new todo:");
      arr.push(newTodo);
      console.log(`${newTodo} added to list`);
    } else {
      console.log("************");
      for (let i = 0; i < arr.length; i++) {
        console.log(`${i}: ${arr[i]}`);
      }
      console.log("************");
    }
  } else if (p === "delete") {
    if (arr.length === 0) {
      newTodo = prompt("Please, first enter a new todo:");
      arr.push(newTodo);
      console.log(`${newTodo} added to list`);
    } else {
      let deleteIndex = parseInt(prompt("Enter index of todo to delete"));

      while (
        isNaN(deleteIndex) ||
        deleteIndex < 0 ||
        deleteIndex >= arr.length
      ) {
        deleteIndex = parseInt(prompt("Enter a valid number to delete!"));
      }
      arr.splice(deleteIndex, 1);
      console.log("Todo Removed");
    }
  }
  p = prompt("What would you like to do?");
}

console.log("You quit the app");
