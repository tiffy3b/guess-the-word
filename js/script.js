const lettersGuessed = document.querySelector(".guessed-letters"); //unordered list
const guessButton = document.querySelector(".guess"); //button
const inputText = document.querySelector(".letter"); //text input
const wordProgress = document.querySelector(".word-in-progress"); //paragraph where the word in progress will appear
const leftGuesses = document.querySelector(".remaining"); //remaining guesses will display
const countDown = document.querySelector(".remaining span"); //countdown for guesses left
const mainWord = document.querySelector(".message"); //message for users progress
const theEnd = document.querySelector(".play-again"); //prompt to play again

let word = "world"; 
//test word to start
let guessedLetters = [];
//holds all the letters the player guessed
let remainingGuesses = 8;
//number of guesses to start off
const getWord = async function () {
    const res = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const data = await res.text();
    const wordArray = data.split("\n");
    const randomWord = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomWord].trim();
    dotGuess(word);
};
getWord();



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
const makeGuess = function (guess){
    guess = guess.toUpperCase();
    if(guessedLetters.includes(guess)){
        mainWord.innerText = "You already guessed that letter";
    }
    else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        countItDown(guess);
        guessed();
        updateProgress(guessedLetters);
    }
};
const guessed = function (){
    lettersGuessed.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        lettersGuessed.append(li);
    }
};
const updateProgress = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const showLetter = [];
    for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        showLetter.push(letter.toUpperCase());
        } else {
            showLetter.push("●");
        }
    }
wordProgress.innerText = showLetter.join("");
winner();
};
const countItDown = function (guess){
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        mainWord.innerText = `Sorry, there is no ${guess} in this word`;
        remainingGuesses -=1;
    }   else {
        mainWord.innerText = `Woo hoo! ${guess} is in this word`;
    }
    if (remainingGuesses === 0) {
        mainWord.innerHTML = `Game Over! The word is <span class="highlight">${word}</span>.`;
        countDown.innerHTML = `${remainingGuesses} guesses`;
        startOver();
    }   else if (remainingGuesses === 1){
        countDown.innerText = `${remainingGuesses} guess`;
    }   else {
        countDown.innerText = `${remainingGuesses} guesses`;
    }
};


const winner = function (){
    if (word.toUpperCase() === wordProgress.innerText) {
        mainWord.classList.add("win");
        mainWord.innerHTML = `<p class="highlight">You guessed the correct word! Congrats! </p>`;
        startOver();
    }
};

const startOver = function () {
    guessButton.classList.add("hide");
    leftGuesses.classList.add(".hide");
    lettersGuessed.classList.add("hide");
    theEnd.classList.remove("hide");
}
theEnd.addEventListener ("click", function() {
    mainWord.classList.remove("win");
    guessedLetters = [];
    remainingGuesses = 8;
    countDown.innerText = `${remainingGuesses} guesses`;
    lettersGuessed.innerHTML = "";
    mainWord.innerHTML = "";
    getWord();

    guessButton.classList.remove("hide");
    leftGuesses.classList.remove(".hide");
    lettersGuessed.classList.remove("hide");
    theEnd.classList.add("hide");
    
});