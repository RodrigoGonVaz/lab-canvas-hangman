class Hangman {
  //expects an array of words as the single parameter.
  constructor(words) {
     //all the words passed to the constructor as an argument will be saved in this property.
    this.words = words;
    //when the class is instantiated, call the method pickWord() and save the result to the property secretWord
    this.secretWord = this.pickWord();
    //an array in which we will store the letters that the user has already picked 
    this.letters = [];
    //a string to store the letters user chose and guessed. 
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ---------------[Este random hace que vaya por una i del array de palabras]
    return `${this.words[Math.floor(Math.random()* this.words.length)]}`
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true
    } else {
      return false
    }
  }
  
      // a method that should check if the letter passed as an argument has already been pressed. 
      //It should return true if it was not or false in the opposite case.
  checkClickedLetters(letter) {

        if (this.letters.includes(letter)) {
          return false
        } else {
          return true;
    }
  }

      //a method that should add the passed letter to the guessedLetters property. 
      //This could be a good place to check if the user won.
  addCorrectLetter(letter) {

     this.guessedLetters +=`${letter}`
    
   }
  

  addWrongLetter(letter) {
    this.errorsLeft --;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else { 
      return false; 
    }
  }
   //a method that should check if the user won and return the corresponding boolean value.
  checkWinner() {
    let secArr = this.secretWord.split("");
    let guessArr = this.guessedLetters.split("")
    for (let i = 0; i < this.secretWord.length; i++) {
      if (guessArr.includes(secArr[i])){
        return true;
      } else {
        return false;
      } 
      
    }
  }


}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
