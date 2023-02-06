//jshint esversion:6

const express = require("express");

const app = express();

//Routes

app.get("/", function (request, response) {
    // console.log(request);
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: example@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("My name is Alper and I love code");
});

app.get("/hobbies", function (req, res) {
    res.send("I love playing computer games");
});

//Starting server

app.listen(3000, function () {
    console.log("Server started on port 3000");
});