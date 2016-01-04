// Pick a random word
var words = [
  "JAVASCRIPT",
  "FISH",
  "MUSIC",
  "DINOSAUR",
  "BIRD",
  "EFFERVESCENT",
  "UBIQUITOUS",
  "PHENOMENAL",
  "APPENDIX",
  "SEPTEMBER",
  "INFLUENCE",
  "JAZZ",
  "AUSTRALIA",
  "CARDBOARD",
  "TEACHER",
  "CHIHUAHUA"
];
//var word = words[Math.floor(Math.random() * words.length)];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
var guessTrack = 9;
var correctGuesses = [];
var correctAgain = false;

// Loop the game
while (remainingLetters > 0 && guessTrack > 0) {
  alert(answerArray.join(" "));
  var correctGuessTwice = false;
  var guessAgain = false;

  // Getting a guess
  var guess = prompt("Guess a letter, or click Cancel to stop playing. \n\nLives left: " + guessTrack);

  // If player quits. Stop game.
  if (guess === null) {
    break;

    // If player does not enter a single letter
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");

    // Update game state with the guess
  } else {
    var found = false;

    // Scanning for letters
    for (var j = 0; j < answerArray.length; j++) {
      if (word[j] === guess.toUpperCase()) {
        answerArray[j] = guess.toUpperCase();
        found = true;
      }
    }
    // Check if letter has already been guessed correctly
    for (x = 0; x < correctGuesses.length; x++) {
      if (guess === correctGuesses[x]) {
        correctGuessTwice = true;
      }
    }
    if (correctGuessTwice) {
      alert("You've already correctly guessed this letter, try again.");
      


    }

    // Alert if letter is FOUND
    if (correctGuessTwice) {
      guess;
    } else if (!found) {
      //alert(word[j] + guess);
      guessTrack--;
      alert("Sorry, " + guess.toUpperCase() + " is not part of the word.\n\nLives remaining " + guessTrack + ".");
    } else if (found) {
      for (j = 0; j < answerArray.length; j++) {
        if (word[j] === guess.toUpperCase()) {
          answerArray[j] = guess.toUpperCase();
          remainingLetters--;
          guessAgain = true;
        }
      }
    }
    if (guessAgain === true) {
      correctGuesses.push(guess);
      alert("Congrats! " + guess.toUpperCase() + " is part of the word!");
    }
  }

}

// Tell player results if he/she has lost or won
if (remainingLetters === 0) {
  alert(answerArray.join(" "));
  alert("Good job! The answer was\n\n" + word);
} else if (guessTrack === 0) {
  alert("Sorry, you lost. The word was\n\n" + word + ".");
}
