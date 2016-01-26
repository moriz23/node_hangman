var prompt = require("prompt");
prompt.start();
var Word = require("./word.js");


var game = {
  wordBank: ["lebron", "brohammed", "iverson", "nike", "philadelphia", "burrito", "megatron", "speakers", "wowzers"],
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd) {
    var newWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
    this.currentWrd = newWord;
    this.currentWrd.getLets();
    this.keepPromptingUser();
  },
  keepPromptingUser: function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result) {
      console.log("The Letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuesses = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuesses === 0) {
        console.log("You guessed wrong!");
        self.guessesRemaining -= 1;
      } else {
        console.log("You guessed right!");
        if (self.currentWrd.didWeFindTheWord() === true) {
          console.log("You Won!!!");
          return 1;
        } else {
          console.log("guesses remaining: " + self.guessesRemaining);
          console.log(self.currentWrd.wordRender());
        }
      }
      if (self.guessesRemaining > 0 && self.currentWrd.found === false) {
        self.keepPromptingUser();
      } else if (self.guessesRemaining === 0) {
        console.log("Game Over Bro");
        console.log("The word was " + self.currentWrd.word);
      } else {
        console.log(self.currentWrd.wordRender());
      }
    });
  }
};

game.startGame();