var displayWord, displaWordDOM, inputWord, seconds, words, secondsDOM, score, scoreDOM;

words = [
  "lucy",
  "heradocles",
  "pablo",
  "armando",
  "maria",
  "kazimiro",
  "asier",
  "diego",
  "josean",
  "unai",
  "daniel",
];

secondsDOM = document.getElementById("time");

scoreDOM = document.getElementById("score");

inputWord = document.getElementById("inputField");

displayWordDOM = document.getElementById("word");

initial();

function timer() {
  var countdown = setInterval(function () {
    console.log(seconds)
    seconds--;
    document.getElementById("time").textContent = seconds + "s";
    if (seconds === 0) {
      clearInterval(countdown);
      initial ();};
  }, 1000);
}

function randomWord() {
  var x = Math.floor(Math.random() * words.length);

  displayWord = words[x];

  displayWordDOM.textContent = displayWord;
}

function initial() {
  inputWord.value = "";
  inputWord.placeholder = "start";
  secondsDOM.textContent = 20;
  seconds = 20;
  score = 0;
  displayWordDOM.textContent = "start";
  scoreDOM.textContent = score + " Points";
  secondsDOM.textContent = seconds + "s"

  inputWord.addEventListener("keyup", gameStart);
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
  inputWord.placeholder = displayWord;
  
  
  inputWord.addEventListener("keyup", () => {
    console.log(displayWord, inputWord.value)
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
