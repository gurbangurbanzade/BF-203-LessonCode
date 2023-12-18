const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

// parse application/json
app.use(bodyParser.json());

let arr = [
  { id: 1, name: "qurban" },
  { id: 2, name: "kanan" },
  { id: 3, name: "mammad" },
  { id: 4, name: "mammad" },
  { id: 5, name: "mammad" },
  { id: 6, name: "mammad" },
  { id: 7, name: "mammad" },
];

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  //   res.send("<h1>Hello World!</h1>");
  res.send("<h1>Users</h1><br/><h1>Products</h1>");
  //   res.send(arr);
});
// get all users
app.get("/users", (req, res) => {
  res.send(arr);
});

//get by id

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const elemById = arr.find((elem) => elem.id == id);
  //   console.log(elemById);
  res.send(elemById);
});

//delete user

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  arr = arr.filter((elem) => elem.id != id);
  res.send(arr);
});

app.post("/users/", (req, res) => {
  const elem = req.body;
  //   console.log(elem);
  arr.push(elem);
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
