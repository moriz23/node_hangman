var Letter = require("./letter.js");

function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function() {
    for (var i = 0; i < this.word.length; i++) {
      this.lets.push(new Letter(this.word[i]));
    }
  }
  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++)
      if(this.lets[i].charac === guessLetter) {
        this.lets[i].appear = true;
        whatToReturn += 1;
    } 
  }
  return whatToReturn;
};

