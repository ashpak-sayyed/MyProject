const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "mysupersecretstring", resave: false, saveUninitialized: true }));
app.use(flash());

app.get("/register" , (req,res) => { 
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    req.flash("success" , "User Register Successfully!");
    res.redirect("/hello");
});

app.get("/hello" , (req , res) => { 
    res.locals.messages = req.flash("success");
    res.render("page.ejs" , {name : req.session.name});
});

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});