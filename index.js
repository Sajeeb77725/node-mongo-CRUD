const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//use middlewere
app.use(cors());
app.use(express.json());

app.get("/", (rep, res) => {
  res.send("My node curd is running");
});

app.listen(port, () => {
  console.log("Curd server is running");
});
