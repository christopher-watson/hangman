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
  currWord: [""],

  

  displayWord: function(){
    //choose a word from list and display it on the screen
    this.randWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
      console.log("displayWord - randWord: " + this.randWord);
    for (var i = 0; i < this.randWord.length; i++){
      this.wordBlank[i] = "_";
      };
    this.currWord = this.randWord;
    mysteryWordHtml.textContent = this.wordBlank.join(" ");
    console.log("displayWord - currWord: " + this.currWord)
  },

  guessLetter: function(a){
    if(!this.currWord.includes(a)){
      this.wrongList.splice(this.count, 1, a);
      this.count++; //keeps counter of wrongLetter array index
      lettersGuessedHtml.textContent = this.wrongList.join(" ");
      this.guessWrong--;
      livesHtml.textContent = this.guessWrong;
      console.log("guessLetter - guessWrong: " + this.guessWrong);
    };

    if(this.randWord.includes(a)){
      for(var i = 0; i < this.currWord.length; i++){
        if (this.randWord[i] === a){
          this.wordBlank.splice(i, 1, a);
        };
      };
      mysteryWordHtml.textContent = this.wordBlank.join(" ");
    };
  },

  newGame: function(){
    this.wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];
    this.guessWrong = 10;
    this.wordBlank = [""];
    this.wrongList = ["-"];
    this.count = 0;
    this.randWord = [""];
    this.newWord = [""];
    this.currWord = "";
    this.displayWord();
  },

  gameOver: function(){
    if(this.guessWrong < 1){
      alert("You Lost");
      this.newGame();
      this.displayWord();
    };
  },

};
  
  hangman.displayWord();
  //mysteryWordHtml.textContent = hangman.wordBlank.join(" ");
  livesHtml.textContent = hangman.guessWrong;
  lettersGuessedHtml.textContent = hangman.wrongList;
  
  document.onkeyup = function(event){
    console.log(event);
  
    var input = event.key;
  
    if(input.match(/[a-z]/i) && input.length === 1){ 
      hangman.guessLetter(input);
      hangman.gameOver();
    };

  };

// hangman.guessLetter("m");
console.log("wordList: " + hangman.wordList);
console.log("guessWrong: " + hangman.guessWrong);
console.log("wordBlank: " + hangman.wordBlank);
console.log("wrongList: " + hangman.wrongList);
console.log("count: " + hangman.count);
console.log("randWord: " + hangman.randWord);
console.log("newWord: " + hangman.newWord);
console.log("currWord: " + hangman.currWord);
