function getMilk(bottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy " + bottles + " bottles of Milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse\n");

    let money = bottles * 1.5;

    console.log(money);

}

// getMilk(12);

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(12);


function bmiCalculator(weight, height) {
    let bmi = (weight / (height * height)) // bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}