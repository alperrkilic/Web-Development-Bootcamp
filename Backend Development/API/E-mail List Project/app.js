//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mailChimp = require("@mailchimp/mailchimp_marketing");
const { response } = require("express");

const app = express();

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");

});

mailChimp.setConfig({
    apiKey: "6da4a62c6762350810b901047ed9d4f5-us21",
    server: "us21"
});


app.post("/", function (req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const listId = "212dd0cc37";

    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    async function run() {
        const response = await mailChimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
    }

    res.sendFile(__dirname + "/success.html");

    console.log("Successfully added contact as an audience member.");

    run().catch(e => res.sendFile(__dirname + "/failure.html"));

});

app.post("/failure", function (req, res) {
    res.redirect("/");
});

// API key
// 6da4a62c6762350810b901047ed9d4f5-us21

// Audience ID
// 212dd0cc37