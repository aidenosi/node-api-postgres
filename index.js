const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const db = require("./queries");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.get("/users", db.createUser);
app.get("/users/:id", db.updateUser);
app.get("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
