//reference variables for DOM elements
var livesHtml = document.getElementById('lives');
var mysteryWordHtml = document.getElementById('mystery-word');
var lettersGuessedHtml = document.getElementById('letters-guessed');
var newGameButton = document.getElementById('new-game-button');


//hangman object
var hangman = {
  wordList: ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"],
  guessWrong: 10,
  wordBlank: [""],
  wrongList: ["-"],
  count: 0,
  randWord: [""],
  newWord: [""],
  currWord: [""],
  isComplete: false,
  win: false,
  isRight: 0,
  this: [],

  
  displayWord: function(){
    //choose a word from list and display it on the screen
    this.randWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
      // console.log("displayWord - randWord: " + this.randWord);
    for (var i = 0; i < this.randWord.length; i++){
      this.wordBlank[i] = "_";
      };
    this.currWord = this.randWord;
    mysteryWordHtml.textContent = this.wordBlank.join(" ");
    // console.log("displayWord - currWord: " + this.currWord)
  },

  guessLetter: function(a){
    //if the current word does not include the input letter "a", add it to a list of wrong letters
    //display list of wrong letters without commas, if input letter is not already in list
    if(!this.currWord.includes(a)){
      if(!this.wrongList.includes(a)){
        this.wrongList.splice(this.count, 1, a);
        this.count++; //keeps counter of wrongLetter array index
        lettersGuessedHtml.textContent = this.wrongList.join(" ");
        this.guessWrong--;
        livesHtml.textContent = this.guessWrong;
        // console.log("guessLetter - guessWrong: " + this.guessWrong);
      };
    };

    //if the current word includes the input letter, swap the _ with the input letter
    //if letter was swapped, add 1 to isRight counter
    if(this.currWord.includes(a)){
      for(var i = 0; i < this.currWord.length; i++){
        if ((this.currWord[i] === a) && (!this.wordBlank[i].includes(this.currWord[i]))){
          this.wordBlank.splice(i, 1, a);
          this.isRight++;
        };
      };
      mysteryWordHtml.textContent = this.wordBlank.join(" ");
    };

    //if length of current word equals amount of letters swapped, word is complete
    if(this.currWord.length === this.isRight){
      this.isComplete = true;
    };

    // console.log("guessLetter - wordBlank: " + this.wordBlank);
    // console.log("guessLetter - currWord: " + this.currWord);
    // console.log("guessLetter - currWordLength: " + this.currWord.length);
    // console.log("guessLetter - isComplete: " + this.isComplete);
    // console.log("guessLetter - isRight: " + this.isRight);
  },

  // didWin: function(){
  //   if(this.win){
  //     if (this.currWord === )
  //   };
  // },

  newGame: function(){
    //reset game
    hangman.wordList = ["chaos", "robot", "house", "thehideout", "kindajazzy", "melodica"];
    hangman.guessWrong = 10;
    hangman.wordBlank = [""];
    hangman.wrongList = ["-"];
    hangman.count = 0;
    hangman.randWord = [""];
    hangman.newWord = [""];
    hangman.currWord = [""];
    hangman.isComplete = false;
    hangman.isRight = 0;
    hangman.displayWord();
    livesHtml.textContent = hangman.guessWrong;
    lettersGuessedHtml.textContent = hangman.wrongList;
  },

  gameOver: function(){
    //if you guessed 10 times, you lose
    if(this.guessWrong < 1){
      $.confirm({
        title: 'You Lose',
        content: 'Would you like to play again?',
        buttons: {
          somethingElse: {
              text: 'Yes',
              btnClass: 'btn-green',
              action: function(){
                  hangman.newGame();
              }
          },
          cancel: function () {
            // $.alert('Ok');
          }
        }
      });
    };

    //if word is complete, you win
    if (this.isComplete){
      this.win = true;
      $.confirm({
        title: 'You Win!',
        content: 'Would you like to play again?',
        buttons: {
          somethingElse: {
              text: 'Yes',
              btnClass: 'btn-green',
              action: function(){
                  hangman.newGame();
              }
          },
          cancel: function () {
            // $.alert('Ok');
          }
        }
      });
    };

  }

};
  
  hangman.displayWord();
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

newGameButton.addEventListener('click', hangman.newGame);

// console.log("wordList: " + hangman.wordList);
// console.log("guessWrong: " + hangman.guessWrong);
// console.log("wordBlank: " + hangman.wordBlank);
// console.log("wrongList: " + hangman.wrongList);
// console.log("count: " + hangman.count);
// console.log("randWord: " + hangman.randWord);
// console.log("newWord: " + hangman.newWord);
// console.log("currWord: " + hangman.currWord);
// console.log("currWordLength: " + hangman.currWord.length);
// console.log("isComplete: " + hangman.isComplete);
// console.log("isRight: " + hangman.isRight);
// console.log("thisArray: " + hangman.this);
