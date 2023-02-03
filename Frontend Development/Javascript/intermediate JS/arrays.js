let guessList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guessList);
console.log(guessList[2]);
console.log(guessList.length);

let guestName = prompt("What is your name?");

if (guessList.includes(guestName)) {
    alert("Welcome");
}
else {
    alert("Sorry, you are not registered.");
}

// array.includes(required_element); --> returns a boolean value

// array.push(new_element); --> pushes to the end of the array.

// array.pop();

function whoPaying(names) {
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}