const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// View engine setup
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes
const indexRoutes = require("./src/routes/index");
app.use("/", indexRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
