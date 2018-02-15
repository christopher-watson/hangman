//reference variables for DOM elements
var livesHtml = document.getElementById('lives');
var mysteryWordHtml = document.getElementById('mystery-word');
var lettersGuessedHtml = document.getElementById('letters-guessed');
var newGameButton = document.getElementById('new-game-button');

//var guessWrong;
// var wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];
// var wrongList = ["-"];
// var wordBlank = [];
// var randWord;
// var count = 0;


//hangman object
var hangman = {
  wordList: ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"],
  // gameOver: false,
  guessWrong: 10,
  wordBlank: [""],
  wrongList: ["-"],
  count: 0,
  randWord: [""],
  newWord: [""],
  currWord: null,
  

  displayWord: function(){
    //choose a word from list and display it on the screen
    this.randWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
      console.log("newWord" + this.randWord);
  },


  guessLetter: function(){
    //allow user to guess correct and incorrect letters
  },

  gameOver: function(){
    //reset the game after the user wins or loses
  },

  startGame: function(){
    //allow user to start a new game 
  },


  // currWord: function(){
  //   //console.log(this.wordList.length);
  //   this.randWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
  //     console.log("currWord" + this.randWord);
  //   for (var i = 0; i < this.randWord.length; i++){
  //     this.wordBlank[i] = "_";
  //     mysteryWordHtml.textContent = this.wordBlank.join(" ");
  //     };
  // },

  newWord: function(){
    this.randWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
      console.log("newWord" + this.randWord);
    for (var i = 0; i < this.randWord.length; i++){
      this.wordBlank[i] = "_";
      mysteryWordHtml.textContent = this.wordBlank.join(" ");
      };
    this.currWord = this.randWord;
    console.log("currWord" + this.currWord)
  },

  wrongLet: function(a){
    if(!this.wrongList.includes(a)){
      this.wrongList.splice(this.count, 1, a);
      this.count++; //keeps counter of wrongLetter array index
      lettersGuessedHtml.textContent = this.wrongList.join(" ");
      this.guessWrong--;
      livesHtml.textContent = this.guessWrong;
      console.log("function " + this.guessWrong);
    };
  },

  replaceLet: function(a){
    for(var i = 0; i < this.randWord.length; i++){
      if (this.randWord[i] === a){
        this.wordBlank.splice(i, 1, a);
      };
    };
    mysteryWordHtml.textContent = this.wordBlank.join(" ");
  },

  newGame: function(){
    this.wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];
    this.guessWrong = 10;
    this.count = 0;
    // this.gameOver = false;
    this.wordBlank = [""];
    this.wrongList = ["-"];
    this.currdWord = this.randWord;
    livesHtml.textContent = this.guessWrong;
    lettersGuessedHtml.textContent = this.wrongList;
    mysteryWordHtml.textContent = this.wordBlank.join(" ");
  },
};

  hangman.newWord();
  mysteryWordHtml.textContent = hangman.wordBlank.join(" ");
  livesHtml.textContent = hangman.guessWrong;
  lettersGuessedHtml.textContent = hangman.wrongList;
  
  document.onkeyup = function(event){
    console.log(event);
  
    var input = event.key;
  
    if(input.match(/[a-z]/i) && input.length === 1){ 
      if(hangman.currWord.includes(input)){
        hangman.replaceLet(input);
        console.log("replaceLet " + hangman.wordBlank);
      }
    
      else if(!hangman.currWord.includes(input)){
        hangman.wrongLet(input);
        console.log("wrongLet " + hangman.wrongList);
      };
    
    };

  };

  newGameButton.addEventListener('click', hangman.newGame);
  newGameButton.addEventListener('click', hangman.newWord);