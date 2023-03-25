const landingPage = document.querySelector(".landing-container");
const startGame = document.querySelector(".start-container .start-game");
const instructionBox = document.querySelector(".how-to");
const exitGame = document.querySelectorAll(".exit");
const continueBtn = document.querySelectorAll(".continue");
const game = document.querySelector(".game");
const firstDog = document.querySelector(".dog-one");
const secondDog = document.querySelector(".dog-two");
const finalScore = document.querySelector(".final-score");
const score = document.querySelector(".running-score");
const nxtBtn = document.querySelector(".next-btn")
const gameOver = document.querySelector(".pop-up")

startGame.addEventListener("click", (e) => {
  instructionBox.style.visibility = "visible";
  startGame.style.visibility = "hidden";
});

exitGame.forEach(item => item.addEventListener("click", (e) => {
  window.location.reload();
}));

continueBtn.forEach(item => item.addEventListener("click", (e) => {
  landingPage.style.visibility = "hidden";
  instructionBox.style.visibility = "hidden";
  game.style.visibility = "visible";
  gameOver.style.visibility = "hidden";
  reset();
  switchDogs();
}));


firstDog.addEventListener("click", (e) => {
  let classDogName = e.target.id;
  console.log(classDogName);
  let secondDogName = secondDog.id;
  isFirstDogPopular(classDogName, secondDogName);
});

secondDog.addEventListener("click", (e) => {
  let classDogName = e.target.id;
  console.log(classDogName);
  let secondDogName = firstDog.id;
  isSecondDogPopular(classDogName, secondDogName);
});

function isFirstDogPopular(dogName, secondDogName) {
    let rank;
    let secondRank; 
    for(let i =0; i < dogPopularity.length; i++){
        if(dogPopularity[i].breed === dogName)
            rank = dogPopularity[i].rank;
        if(dogPopularity[i].breed === secondDogName)
            secondRank = dogPopularity[i].rank
    }
  rank < secondRank
    ? right()
    : wrong(dogName, secondDogName);
}

function isSecondDogPopular(dogName, secondDogName) {
  let rank;
  let secondRank;
  for (let i = 0; i < dogPopularity.length; i++) {
    if (dogPopularity[i].breed === dogName) rank = dogPopularity[i].rank;
    if (dogPopularity[i].breed === secondDogName)
      secondRank = dogPopularity[i].rank;
  }

  rank < secondRank ? right() : wrong(dogName,secondDogName);
}

let scoreVar = 0;
function right() {
    nxtBtn.style.visibility = "visible";
    firstDog.classList.add("disable");
    secondDog.classList.add("disable")
     nxtBtn.style.visibility = "visible";
    scoreVar++;
    score.textContent = scoreVar;

}

function reset(){
    scoreVar=0;
    game.classList.remove("disable");
    score.textContent = scoreVar;
}

function switchDogs(){
   let randomNum = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
   let breedOne = dogPopularity[randomNum].breed
    firstDog.src = "./dogImages/" + breedOne +".jpg";
    firstDog.alt = breedOne;
    firstDog.id = breedOne;
    let randomNumTwo = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    while(randomNumTwo === randomNum){
        randomNumTwo = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    }
    let breedTwo = dogPopularity[randomNumTwo].breed
    secondDog.src = "./dogImages/" + breedTwo + ".jpg";
    secondDog.alt = breedTwo;
    secondDog.id = breedTwo;
}


function wrong(dogName, secondDogName) {
  gameOver.style.visibility = "visible";
  game.classList.add("disable");
  document.querySelector(".right-answer").textContent = secondDogName;
  document.querySelector(".wrong-answer").textContent = dogName
  document.querySelector(".final-score").textContent = scoreVar
}

nxtBtn.addEventListener("click", (e)=>{
    switchDogs();
    firstDog.classList.remove("disable")
    secondDog.classList.remove("disable");
    nxtBtn.style.visibility = "hidden"
})



