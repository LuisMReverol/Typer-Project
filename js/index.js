var displayWord, displaWordDOM, inputWord, seconds, words, secondsDOM, score, scoreDOM, highScoreDOM, highScore;

words = [
  "cayde-6",
  "crota",
  "crucible",
  "cryptarch",
  "engram",
  "exotic",
  "fireteam",
  "gjallarhorn",
  "guardian",
  "infusion",
  "major",
  "nightfall",
  "oryx",
  "raid",
  "lair",
  "shaxx",
  "drifter",
  "hive",
  "variks",
  "xur",
  "vault of glass",
  "kingsfall",
  "leviathan",
  "dark below",
  "taken king",
  "ghost",
  "solar",
  "arc",
  "void",
  "siva",
  "rasputin",
  "ana bray",
  "radegast",
  "iron lords",
  "young wolf",
  "world line zero",
  "glimmer",
  "sparrow",
  "traveler",
  "piramid",
  "felwinter",
  "calus",
  "awoken",
  "mara",
  "uldren",
  "risen",
  "light",
  "dark",
  "osiris",
  "dreadnaughts",
  "golgoroth",
  "alak-hul",
  "nokris",
  "deep stone crypt",
  "dul incaru",
  "xyor",
  "thorn",
  "savathun",
  "vex",
  "fallen",
  "seed"
];

secondsDOM = document.getElementById("time");

scoreDOM = document.getElementById("score");

inputWord = document.getElementById("inputField");

displayWordDOM = document.getElementById("word");

highScoreDOM = document.getElementById("high"); 

titleState = document.getElementById("startText");

initial();

highScore = 0;

function timer() {
  var countdown = setInterval(function () {
    console.log(seconds)
    seconds--;
    document.getElementById("time").textContent = seconds + "s";
    if (seconds === 0) {
      clearInterval(countdown);
      gameOver();
    };
  }, 1000);
}

function randomWord() {
  var x = Math.floor(Math.random() * words.length);

  displayWord = words[x];

  displayWordDOM.textContent = displayWord;
}

function initial() {
  inputWord.value = "";
  inputWord.placeholder = "Type " + "start";
  secondsDOM.textContent = 20;
  seconds = 20;
  score = 0;
  displayWordDOM.textContent = "start";
  scoreDOM.textContent = score + " Points";
  secondsDOM.textContent = seconds + "s"

  inputWord.addEventListener("keyup", gameStart);
}

function gameOver() {
  
  if (score > highScore) {
  highScore = score;
  highScoreDOM.textContent = highScore + " Highscore";
  }

  initial ();
}

function gameStart() {
  if ("start" === inputWord.value.toLowerCase()) {
    inputWord.removeEventListener("keyup", gameStart);
    gameState();
  }
}

function gameState() {
  timer();
  inputWord.value = "";
  randomWord();
  inputWord.placeholder = "Type " + displayWord;
  
  inputWord.addEventListener("keyup", () => {
    
    if (displayWord === inputWord.value.toLowerCase()) {
      console.log("If verification")
      randomWord();
      inputWord.placeholder = displayWord;
      document.getElementById("inputField").value = "";
      score ++;
      seconds ++;
      secondsDOM.textContent = seconds + "s"
      scoreDOM.textContent = score + " Points"
    }
  })
}
