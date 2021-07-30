const path = require("path");
const morgan = require("morgan");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const db = require("./config/db");
const route = require("./routes")
const methodOverride = require('method-override');
app.use(express.static('public'));

// connect db
db.connect();


app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
// app.use(morgan("combined"));
//  handle bars

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: { 
      sum: (a,b)=> a + b,}
    })
);

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "resources", "views"));
//Route
route(app);

app.listen(port, () =>
  console.log(`App listening at  http://localhost:${port}`)
);
