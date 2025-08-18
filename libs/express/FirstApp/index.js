const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  console.log("new req!");
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
