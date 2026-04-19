let words = ["letter", "music", "craft"];
const letterContainer = document.getElementById("letter-box");
const lives = document.querySelector(".lives");
let scoreTally = 0;
let randWord;

document.addEventListener("click", () => {
  randWord = words[Math.floor(Math.random() * words.length)];

  randWord = randWord.split("");

  let array = randWord.map((value) => {
    return `<span id="${value}" class="concealed" ></span>`;
  });

  let fullHtml = array.join("");
  letterContainer.innerHTML = fullHtml;
});

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
    hearts.remove();
  }
});
