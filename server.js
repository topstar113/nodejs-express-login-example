const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// database
const db = require("./app/models");

db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});

// routes
require("./app/routes/auth.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});