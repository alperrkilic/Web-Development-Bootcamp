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

    return money;

}

let x = getMilk(12);

console.log("Value of X is: " + x);

/*
    math.floor(float_value); --> will be rounded to previous integer
*/