const lettersGuessed = document.querySelector(".guessed-letters"); //unordered list
const guessButton = document.querySelector(".guess"); //button
const inputText = document.querySelector(".letter"); //text input
const wordProgress = document.querySelector(".word-in-progress"); //paragraph where the word in progress will appear
const leftGuesses = document.querySelector(".remaining"); //remaining guesses will display
const countDown = document.querySelector(".remaining span"); //countdown for guesses left
const mainWord = document.querySelector(".message"); //the word that is being guessed
const theEnd = document.querySelector(".play-again"); //prompt to play again

const word = "magnolia"; 
//test word to start
const guessedLetters = [];
//holds all the letters the player guessed

const dotGuess = function (word){ 
    //function to add dot placeholders for the word to be guessed
    const dotGuessLetters = [];
    for (const letter of word){
        console.log(letter);
        dotGuessLetters.push("●");
    }
    wordProgress.innerText = dotGuessLetters.join("");
};
    dotGuess(word);

guessButton.addEventListener("click", function (e) { 
    //shows result in console when the button is pressed
    e.preventDefault();
    //prevents reloading behavior
    mainWord.innerText = ""; 
    //emptys text for the .message element
   const letter = inputText.value;
  
   
   const goodGuess = playersInput(letter);
    if (goodGuess) {
        makeGuess(letter);
   }
   inputText.value = "";
   
});

const playersInput = function (input) {
    //validates the player's input
    const acceptedLetter = /[a-zA-Z]/;
    //regular expression
    if (input.length === 0) {
        mainWord.innerText = "Please enter a letter"; }
        else if (input.length >1) {
            mainWord.innerText = "Please enter only 1 letter";}
        else if (!input.match(acceptedLetter)) { 
            mainWord.innerText = "Please enter a letter A-Z";
    }   
        else {
            return input;
        }
};
const makeGuess = function (letter){
    letter = letter.toUpperCase();
    if(guessedLetters.includes(letter)){
        mainWord.innerText = "You already guessed that letter";
    }
    else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
    }
};

  

