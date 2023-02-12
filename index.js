const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (rep, res) => {
  res.send("My node curd is running");
});

app.listen(port, () => {
  console.log("Curd server is running");
});
