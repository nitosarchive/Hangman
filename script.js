let words = ["letter", "music", "craft"];
const letterContainer = document.getElementById("letter-box");

document.addEventListener("click", () => {
  let randWord = words[Math.floor(Math.random() * words.length)];

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
      word.innerText = e.key;
    }
  });
});
