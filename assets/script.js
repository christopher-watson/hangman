//reference variables for DOM elements
var livesHtml = document.getElementById('lives');
var mysteryWordHtml = document.getElementById('mystery-word');
var lettersGuessedHtml = document.getElementById('letters-guessed');
var newGameButton = document.getElementById('new-game-button');

//var guessWrong;
var wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];
var wrongList = ["-"];
// var wordBlank = [];
var randWord;
var count = 0;


//hangman object
var hangman = {
  gameOver: false,
  guessWrong: 10,
  wordBlank: [],

  //select a word from list
  currWord: function(){
    randWord = wordList[Math.floor(Math.random() * wordList.length)];
      console.log(randWord);
    for (var i = 0; i < randWord.length; i++){
    this.wordBlank[i] = "_";
    mysteryWordHtml.textContent = this.wordBlank.join(" ");
    };
  },

  wrongLet: function(a){
    if(!wrongList.includes(a)){
      wrongList.splice(count, 1, a);
    count++; //keeps counter of wrongLetter array index
    lettersGuessedHtml.textContent = wrongList.join(" ");
    this.guessWrong--;
    livesHtml.textContent = this.guessWrong;
    console.log("function " + this.guessWrong);
    };
    
  },

  replaceLet: function(a){
    for(var i = 0; i < randWord.length; i++){
      if (randWord[i] === a){
        this.wordBlank.splice(i, 1, a);
      }
    }
    mysteryWordHtml.textContent = this.wordBlank.join(" ")
  },

  newGame: function(){
    this.guessWrong = 10;
    count = 0;
    this.gameOver = false;
    livesHtml.textContent = this.guessWrong;
    this.wordBlank = [];

  },

};

  hangman.currWord();
  mysteryWordHtml.textContent = hangman.wordBlank.join(" ");
  livesHtml.textContent = hangman.guessWrong;
  lettersGuessedHtml.textContent = wrongList;
  

  document.onkeyup = function(event){
    console.log(event);
  
    var input = event.key;
  
    if(input.match(/[a-z]/i) && input.length ===1){ 
      if(randWord.includes(input)){
        hangman.replaceLet(input);
        console.log("replaceLet " + hangman.wordBlank);
      }
    
      else if(!randWord.includes(input)){
        hangman.wrongLet(input);
        console.log("wrongLet " + wrongList);
      };
    
    };

  };

  newGameButton.addEventListener('click', hangman.newGame);