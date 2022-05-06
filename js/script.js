const lettersGuessed = document.querySelector(".guessed-letters"); //unordered list
const guessButton = document.querySelector(".guess"); //button
const inputText = document.querySelector(".letter"); //text input
const wordProgress = document.querySelector(".word-in-progress"); //paragraph where the word in progress will appear
const leftGuesses = document.querySelector(".remaining"); //remaining guesses will display
const countDown = document.querySelector(".remaining span"); //countdown for guesses left
const mainWord = document.querySelector(".message"); //the word that is being guessed
const theEnd = document.querySelector(".play-again"); //prompt to play again

const word = "magnolia"; //test word to start

const dotGuess = function (word){ //function to add dot placeholders for the word to be guessed
    const dotGuessLetters = [];
    for (const letter of word){
        console.log(letter);
        dotGuessLetters.push("●");
    }
    wordProgress.innerText = dotGuessLetters.join("");
};
    dotGuess(word);

guessButton.addEventListener("click", function (e) { //shows result in console when the button is pressed
    e.preventDefault();
    //prevents reloading behavior
    mainWord.innerText = ""; 
    //emptys text for the .message element
   
});

const playersInput = function (inputText) {
    //validates the player's input
    const acceptedLetter = /[a-zA-Z]/;
    //regular expression
    if (inputText.length === 0) {
        mainWord.innerText = "Please enter a letter"; }
        else if (!inputText.match(acceptedLetter)) { 
            mainWord.innerText = "Enter only one letter";
    }   
        else {
            return inputText;
        }

};
    
playersInput(inputText);
