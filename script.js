let words = ["letter", "music", "craft"];
const letterContainer = document.getElementById("letter-box");
const lives = document.querySelector(".lives");
let scoreTally = 0;
let randWord;
const gameStart = document.getElementById("game-start");
const restart = document.getElementById("restart");
let hearts;
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


function fetchGame (){
  randWord = words[Math.floor(Math.random() * words.length)];
  document.querySelector(".intro-container").classList.add("hidden");
  document.querySelector(".game-container").classList.remove("hidden");
  randWord = randWord.split("");

  let array = randWord.map((value) => {
    return `<span id="${value}" class="concealed" ></span>`;
  });

  document.querySelectorAll(".heart").forEach((hearts)=>{
    hearts.remove();
  })


    for (let i=0; i<3; i++) { 
    const heartImg = document.createElement("img");
    heartImg.src = "./imgs/heart-png-38780.png";
    heartImg.classList.add("heart");
    lives.appendChild(heartImg);



}
  let fullHtml = array.join("");
  letterContainer.innerHTML = fullHtml;
}

gameStart.addEventListener("click", fetchGame);
restart.addEventListener("click", fetchGame);


document.addEventListener("keyup", (e) => {

  
  if (!alphabet.includes(e.key)) return;


   if (!randWord.includes(e.key)) {
    hearts = document.querySelector(".heart");
  
    
    hearts.remove();
    if (!hearts){
      console.log("finished")
    };
  } 

  letterContainer.querySelectorAll("span").forEach((word) => {
    if (word.id === e.key) {
      word.classList.remove("concealed");
      scoreTally = scoreTally + 10;
      
      document.getElementById("score").innerText = scoreTally;
      word.innerText = e.key;
    }
  });

 
});


