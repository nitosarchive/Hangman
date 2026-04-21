let words = ["letter", "music", "craft"];
const letterContainer = document.getElementById("letter-box");
const lives = document.querySelector(".lives");
let scoreTally = 0;
let randWord;
const gameStart = document.getElementById("game-start");
const restart = document.getElementById("restart");

function fetchGame (){
    randWord = words[Math.floor(Math.random() * words.length)];
  gameStart.classList.add("hidden")
  randWord = randWord.split("");

  let array = randWord.map((value) => {
    return `<span id="${value}" class="concealed" ></span>`;
  });

  
for (let i=0; i<3; i++) {
const hearts = document.createElement("img");
console.log(hearts);
hearts.src = "./imgs/heart-png-38780.png";
hearts.classList.add("heart")
lives.appendChild(hearts)
}

  let fullHtml = array.join("");
  letterContainer.innerHTML = fullHtml;
}

gameStart.addEventListener("click", fetchGame);
restart.addEventListener("click", fetchGame);


document.addEventListener("keyup", (e) => {
  letterContainer.querySelectorAll("span").forEach((word) => {
    if (word.id === e.key) {
      word.classList.remove("concealed");
      scoreTally = scoreTally + 10;

      document.getElementById("score").innerText = scoreTally;
      word.innerText = e.key;
    }
  });

  if (!randWord.includes(e.key)) {
    const hearts = document.querySelector(".heart");
    if (!hearts) return;
    hearts.remove();
  }
});


