let words = ["letter", "music", "craft"];

document.addEventListener("click", () => {
  const randWord = words[Math.floor(Math.random() * words.length)];
});
