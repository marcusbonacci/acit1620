let hits = 0;
let guesses = 0;
let guess;
let location1 = 2;
let location2 = 3;
let location3 = 4;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Fire the cannon: (0-6):");
    if (guess >= 0 || guess >= 6) {
        alert("Your guess is invalid")
        return
    } else {
        guesses += 1
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit")
        } else {
            alert("Miss")
        }
    }
}