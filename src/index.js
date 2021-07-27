const path = require("path");
const morgan = require("morgan");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const db = require("./config/db/index");
const route = require('./routes');
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
// app.use(morgan("combined"));
//  handle bars

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//Route
route(app);

app.listen(port, () =>
  console.log(`Example app listening at  http://localhost:${port}`)
);
