const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//use middlewere
app.use(cors());
app.use(express.json());

//dbsajeeb
//pass: rdjnOdDnsavBHu82

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dbsajeeb:rdjnOdDnsavBHu82@cluster1.852mvug.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("DB connection failed again");
  // perform actions on the collection object
  client.close();
});

app.get("/", (rep, res) => {
  res.send("My node curd is running!");
});

app.listen(port, () => {
  console.log("Curd server is running");
});
