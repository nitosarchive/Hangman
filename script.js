let words = ["letter", "music", "craft"];
const letterContainer = document.getElementById("letter-box");

document.addEventListener("click", () => {
  let randWord = words[Math.floor(Math.random() * words.length)];

  randWord = randWord.split("");

  let array = randWord.map((value) => {
    return `<span class ="${value}"></span>`;
  });

  let fullHtml = array.join("");
  letterContainer.innerHTML = fullHtml;
  letterContainer.querySelectorAll("span").forEach((word) => {
    word.classList.add("concealed");
  });
});
