const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/relation")
  .then(() => {
    console.log("database is connect");
  })
  .catch((err) => {
    console.log("err is ", err);
  });
app.use(require("./routes/route"));
app.listen(5000, () => {
  console.log("server is connected on port 5000");
});
