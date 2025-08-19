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

app.get("/r/:subreddit/", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});
app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post Id: ${postId} on the ${subreddit} subreddit</h1>`);
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
