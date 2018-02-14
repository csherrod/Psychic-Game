// Psychic Game Variables
var guessesLeft = 9;
var lettersGuessed = [];
var userGuess = null;
var wins = 0;
var losses = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//What the computer picks
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//This will reset the game
var start = function () {
    guessesLeft = 9;
    lettersGuessed = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
};

// This will start to listen for user input
document.onkeyup = function (event) {
    //Makes sure we are listening for only letters and it wasn't previously picked
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (lettersGuessed.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        lettersGuessed[lettersGuessed.length] = userGuess;
        //If it's a new letter decrease guesses -1
        guessesLeft--;
        //Overwrite html to update the # of guesses left for user
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        //Will display on page the letters user has input
        document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
    }

    //Win condition
    if (computerGuess == userGuess) {
        wins++;
        //Overwrite html for wins
        document.querySelector("#wins").innerHTML = wins;
        start();
    }
    //Loss condition
    if (guessesLeft == 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        start();
    }
};