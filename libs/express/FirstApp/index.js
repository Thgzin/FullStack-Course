const express = require("express");
const app = express();
const port = 3000;

//app.use((req, res) => {
// console.log("new req!");
//res.send("<h1>Hello World!</h1>");
//});

app.get("/", (req, res) => {
  res.send("<h1>This is the home page!</h1>");
});

app.get("/cats", (req, res) => {
  res.send("<h1>Cats are great!</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("Woof!");
});

app.get("/r/:subreddit", (req, res) => {
  res.send("This is a subreddit");
});

app.get(/(.*)/, (req, res) => {
  res.send("I don't know that path!");
});

app.post("/cats", (req, res) => {
  res.send("POST request to /cats");
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
