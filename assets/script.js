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

// var input;

//hangman object
var hangman = {
  gameOver: false,

  //select a word from list
  currWord: function(){
  },

  wrongLet: function(a){
    wrongList.push(a);
    console.log("function " + wrongList)
  },
};

  mysteryWordHtml.textContent = wordBlank.join(" ");
  livesHtml.textContent = guessWrong;
  lettersGuessedHtml.textContent = wrongList;

  document.onkeyup = function(event){
    console.log(event);
  
    var input = event.key;
    
    hangman.wrongLet(event);
    console.log("doc " + wrongList);
  
  }

  // console.log(wrongList);

  