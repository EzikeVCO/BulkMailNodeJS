/// bring in express and body parser  & other dependencies//
const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

// initialise our app variable using express//
const app = express();
// view engine setup
app.engine("handlebars", exphbs);
app.set("view engine", "handlebars");

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// create your routes for index pages/app pages//
app.get("/", (req, res) => {
  res.send("Home");
});

// create your listenning port for app//
app.listen(3000, () => console.log("Server Running"));

///next create our public folder///
