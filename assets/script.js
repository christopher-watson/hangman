//reference variables for DOM elements
var livesHtml = document.getElementById('lives');
var mysteryWordHtml = document.getElementById('mystery-word');
var lettersGuessedHtml = document.getElementById('letters-guessed');
var newGame = document.getElementById('restart-button');

var guessWrong = 10;

var wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];

var randWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randWord);

var wordBlank = [];
for (var i = 0; i < randWord.length; i++){
  wordBlank[i] = "_";
};

var wrongList = [];

var count = 0;

//hangman object
var hangman = {
  gameOver: false,

  //select a word from list
  currWord: function(){
  },

  wrongLet: function(a){
    wrongList.splice(count, 1, a);
    count++;
    lettersGuessedHtml.textContent = wrongList.join(" ");
  },

//adds letters to array at wrong location
/*
  wrongLet: function(a){
    wrongList.push(a);
    lettersGuessedHtml.textContent = wrongList.join("");
  }
*/
  replaceLet: function(a){
    for(var i = 0; i < randWord.length; i++){
      if (randWord[i] === a){
        wordBlank.splice(i, 1, a);
      }
    }
    mysteryWordHtml.textContent = wordBlank.join(" ")
  },
};

  mysteryWordHtml.textContent = wordBlank.join(" ");
  
  livesHtml.textContent = guessWrong;

  document.onkeyup = function(event){
    console.log(event);
  
    var input = event.key;
    
    hangman.wrongLet(input);
    console.log("wrongLet " + wrongList);

    hangman.replaceLet(input);
    console.log("replaceLet " + wordBlank);
  };
