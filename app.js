const express = require("express");
require("./database")
const app = express();

const port = process.env.PORT || 4000;

//ENGINE TEMPLATES
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// MIDDLEWARES
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES MIDDLEWARES
app.use("/", require("./routes/routes"));

//PORT
app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
