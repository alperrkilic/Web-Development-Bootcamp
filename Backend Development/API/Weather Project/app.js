//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const apiKey = "c8b67ec1d5b8b5965ee372a704d33722"
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function (response) {

        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data); // Making it string again -> JSON.stringify(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description; // console.log(weatherDescription);
            const placeName = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + placeName + " is " + temp + " degrees Celsius.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });

});



app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});