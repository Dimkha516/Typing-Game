const main = document.querySelector(".main");
let time = document.querySelector(".time");
let word = document.querySelector(".word");
let userInput = document.querySelector(".userInput");
const launch = document.getElementById("launch");
const stop = document.getElementById("stop");

const wordsTab = ["javascript", "python", "java", "c++", "c", "php"];
// let randomIndex = Math.floor(Math.random() * wordsTab.length);
// let randomWord = wordsTab[randomIndex];

function startTyping() {
  let secondes = 5;

  function generateWord() {
    return wordsTab[Math.floor(Math.random() * wordsTab.length)];
  }

  let randomWord = generateWord();
  word.innerHTML = randomWord;

  userInput.addEventListener("input", (e) => {
    if (e.target.value === randomWord) {
      secondes += 5;
      userInput.value = "";
      word.innerHTML = "";
      randomWord = generateWord();
      word.innerHTML = randomWord;
    }
  });
  //

  const handleInterval = setInterval(() => {
    if (secondes === 0) {
      clearInterval(handleInterval);
      time.innerHTML = "Fin du temps!";
      main.classList.add("showStartButton");
      main.classList.remove("hideStartButton");
      main.classList.add("hideStopButton");
    } else {
      secondes--;
      main.classList.add("hideStartButton");
      main.classList.add("showStopButton");
      time.innerHTML = secondes;
    }
  }, 1000);

  stop.addEventListener("click", () => {
    main.classList.remove("hideStartButton");
    main.classList.add("showStartButton");
    clearInterval(handleInterval);
    time.innerHTML = "Terminé !";
  });
}


launch.addEventListener("click", () => {
    word.innerHTML = "";
    main.classList.add("showStopButton");
    startTyping();
    //
    
    
  const handleInterval = setInterval(() => {
    if (secondes === 0) {
      clearInterval(handleInterval);
      time.innerHTML = "Fin du temps!";
      main.classList.add("showStartButton");
      main.classList.remove("hideStartButton");
      main.classList.add("hideStopButton");
    } else {
      secondes--;
      main.classList.add("hideStartButton");
      main.classList.add("showStopButton");
      time.innerHTML = secondes;
    }
  }, 1000);
});
