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



//hangman object
var hangman = {
  gameOver: false,

  //select a word from list
  currWord: function(){

    
  },
};

  mysteryWordHtml.textContent = wordBlank.join(" ");
  livesHtml.textContent = guessWrong;