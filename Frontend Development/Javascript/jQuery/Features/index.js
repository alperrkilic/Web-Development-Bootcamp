$("h1").addClass("big-title margin-50");

$(document).keydown(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});


/*
    $("h1").css("color", "red"); // setting the value

    $("h1").css("color"); // getting the value

    Assume we have a class ".bit-title"

    big-title{
        font-size:10rem;
        color:yellow;
        font-family:cursive;
    }

    to add class to our element with properties of jQuery :

    $("h1").addClass("big-title"); // now h1 has big-title class and got styled.

    .margin-50{
        margin:50px;
    }

    to add more than one class:
    
    $("h1").addClass("big-title margin-50");

    $("h1").hasClass("margin-50"); // returns true 


    In order to change the text:

    $("h1").text("Bye");

    To learn the attributes:

    $("h1").attr("class"); // big-title margin-50

*/