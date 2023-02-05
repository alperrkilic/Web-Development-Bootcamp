let TwinkleTwinkleLittleStar = ["c", "c", "g", "g", "a", "a", "g", "f", "f", "e", "e", "d", "d", "c", "g", "g", "f", "f", "e", "e", "d", "g", "g", "f", "f", "e", "e", "d", "c", "c", "g", "g", "a", "a", "g", "f", "f", "e", "e", "d", "d", "c"];

let counter = 0;

$(".key").click(function () {

    var userChosenButton = $(this).attr("id");

    playSound(userChosenButton);
    animatePress(userChosenButton);

});

function playSound(userChosenButton) {
    let audio = new Audio("sounds/" + userChosenButton + ".mp3");
    audio.play();
    counter++;

    if (counter == 42) {
        counter = 0;
    }

}

function animatePress(userChosenButton) {
    $("#" + userChosenButton).addClass("pressed");

    setTimeout(function () {
        $("#" + userChosenButton).removeClass("pressed");
    }, 65);
}

$(".play-music-button").click(function () {

    if (counter === 0) {
        var musicName = $(this).attr("id");
        var delayTime = 0;

        if (musicName === "ttls-song") {
            for (let i = 0; i < TwinkleTwinkleLittleStar.length; i++) {
                let currentNote = "piano-" + TwinkleTwinkleLittleStar[i];

                setTimeout(function () {
                    playSound(currentNote);
                    animatePress(currentNote);
                }, delayTime);

                delayTime += 450;
            }
        }
    }
});