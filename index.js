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
async function run() {
  try {
    await client.connect();
    const usersCollection = client.db("foodExpress").collection("users");

    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = usersCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("New user", newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (rep, res) => {
  res.send("My node curd is running!");
});

app.listen(port, () => {
  console.log("Curd server is running");
});
