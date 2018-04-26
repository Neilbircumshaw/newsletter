const express = require("express");
const app = express();
const homePageRoute = require('./routes');
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set("view engine", "pug");

app.listen(3000, () => {
  console.log("Listening on port 3000!")
});

app.use(homePageRoute);
