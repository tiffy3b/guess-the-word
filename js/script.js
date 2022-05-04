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

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const buttonText = inputText.value;
    console.log(buttonText);
    inputText.value =  "";
});