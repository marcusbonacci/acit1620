let model = {
    boardSize: 7,
    shipLength: 3,
    numShips: 4,
    locations: [],
    ships: [],

    fire: function() {

    },
    isSunk: function() {

    },
    generateShipLocations: function() {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while(this.collision(locations));
        }
        console.log("Ships array: ", this.ships);
    },
    generateShip: function() {
        let direction = Math.floor(Math.random() * 2)
        let row, col;

        if (direction === 1) { // Horizontal
            row = Math.floor(Math.random() * boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * boardSize);
        }

        let newShipLocations = [];
        for (let i = 0; i < This.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    collision: function() {
        
    }
}

let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit")
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

let controller = {
    guesses: 0,
}

function parseGuess(guess){

}

function handleFireBUtton() {

}

function handleKeyPress() {

}

window.onload = init;

function init() {

}