/// bring in express and body parser & other dependencies//
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
// initialise our app variable using express//
const app = express();
// view engine setup middleware setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
//enables express to handle your file paths in the public folder
app.use("/public", express.static(path.join(__dirname, "public")));
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// create your routes for index pages/app pages//
app.get("/", (req, res) => {
  res.render("contact");
});
// create your listenning port for app//
app.listen(3000, () => console.log("Server Running"));
///next create our public folder///
