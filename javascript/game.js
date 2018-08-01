// Psychic Game Variables
var guessesLeft = 9
var lettersGuessed = []
var computerGuess = null
var wins = 0
var losses = 0
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var updateGuessesLeft = function () {
  // This will show the user how many guesses they have left
  document.querySelector('#guessesLeft').innerHTML = guessesLeft
}

var updateComputerGuess = function () {
  // This will generate the computer guess
  computerGuess = letters[Math.floor(Math.random() * letters.length)]
}

var updateGuessesSoFar = function () {
  // Display User Guesses
  document.querySelector('#lettersGuessed').innerHTML = lettersGuessed.join(', ')
}

// This will reset the game
var reset = function () {
  guessesLeft = 9
  lettersGuessed = []
  updateGuessesLeft()
  updateComputerGuess()
  updateGuessesSoFar()
}

updateComputerGuess()
updateGuessesLeft()

// This will start to listen for user input
document.onkeyup = function (event) {
  // If it's a new letter decrease guesses -1
  guessesLeft--
  // Makes sure we are listening for only letters and it wasn't previously picked
  var userGuess = String.fromCharCode(event.which).toLowerCase()
  lettersGuessed.push(userGuess)
  // Then update functions
  updateGuessesLeft()
  updateGuessesSoFar()

  // Win condition
  if (computerGuess === userGuess) {
    wins++
    // Overwrite html for wins
    document.querySelector('#wins').innerHTML = wins
    reset()
  }
  // Loss condition
  if (guessesLeft === 0) {
    losses++
    document.querySelector('#losses').innerHTML = losses
    reset()
  }
}
