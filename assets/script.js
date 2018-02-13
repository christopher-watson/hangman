//reference variables for DOM elements
var livesHtml = document.getElementById('lives');
var mysteryWordHtml = document.getElementById('mystery-word');
var lettersGuessedHtml = document.getElementById('letters-guessed');
var newGameButton = document.getElementById('new-game-button');

var guessWrong = 10;
var wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];
var wrongList = [];
var wordBlank = [];
var randWord;
var count = 0;


//hangman object
var hangman = {
  gameOver: false,

  //select a word from list
  currWord: function(){
    randWord = wordList[Math.floor(Math.random() * wordList.length)];
      console.log(randWord);
    for (var i = 0; i < randWord.length; i++){
    wordBlank[i] = "_";
    mysteryWordHtml.textContent = wordBlank.join(" ");
    };
  },

  wrongLet: function(a){
    wrongList.splice(count, 1, a);
    count++;
    lettersGuessedHtml.textContent = wrongList.join(" ");
  },

  replaceLet: function(a){
    for(var i = 0; i < randWord.length; i++){
      if (randWord[i] === a){
        wordBlank.splice(i, 1, a);
      }
    }
    mysteryWordHtml.textContent = wordBlank.join(" ")
  },

  newGame: function(){
    guessWrong = 10;
    count = 0;
    this.gameOver = false;

  }
};

  hangman.currWord();
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

  newGameButton.addEventListener('click', hangman.newGame);