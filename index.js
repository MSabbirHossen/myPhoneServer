const express = require("express");
const phones = require("./phones.json");
var cors = require('cors')
const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!, Server is running on port 3000 with nodemon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  const phone = phones.find((p) => p.id === id);
  if (phone) {
    res.send(phone);
  } else {
    res.status(404).send("Phone not found");
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
