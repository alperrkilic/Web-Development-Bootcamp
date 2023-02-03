let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
    console.log("Your love score is " + loveScore + "%.");
    console.log("You love yourself like Kanye loves Kanye");
}
else {
    console.log("Your love score is " + loveScore + "%.");
}

/*
    === is equal to
    !== is not equal to
    > greater than
    < lesser than
    <= lesser than or equal to
    >= greater than or equal to
    && and , || or , ! not
*/

function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year.");
            }
            else {
                console.log("Not leap year.");
            }
        }
        else {
            console.log("Not leap year.");
        }
    }
    else {
        console.log("Not leap year.");
    }
}