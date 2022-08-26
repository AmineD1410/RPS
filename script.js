function playAnimation(e) {
    const mainContent = document.querySelector(".intro");
    mainContent.classList.add('fade-out-animation');
    mainContent.addEventListener('animationend', (event) => { mainContent.remove(); gameContent.classList.add('fade-in-animation'); });
}
const mainButton = document.querySelector('.play');
mainButton.addEventListener('click', playAnimation);

const gameContent = document.querySelector('.game-content');
const gameImages = document.querySelector('.game-images');
const gameTextUpper = document.createElement("h1");
gameTextUpper.innerHTML = "Choose your Hand <br> Goodluck!";
gameContent.appendChild(gameTextUpper);
const rock = document.createElement("img");
const paper = document.createElement("img");
const scissors = document.createElement("img");
rock.setAttribute("src", "./Images/rock.png");
paper.setAttribute("src", "./Images/paper.png");
scissors.setAttribute("src", "./Images/scissors.png");
rock.classList.add("game-image", "rock");
paper.classList.add("game-image", "paper");
scissors.classList.add("game-image", "scissors");
gameImages.appendChild(rock);
gameImages.appendChild(paper);
gameImages.appendChild(scissors);




let playerSelection = "";

rockClick = document.querySelector('.rock');
scissorsClick = document.querySelector('.scissors');
paperClick = document.querySelector('.paper');


let a = 0; let b = 0;


rockClick.addEventListener('click', (e) => { playerSelection = "ROCK"; });
scissorsClick.addEventListener('click', (e) => { playerSelection = "SCISSORS"; });
paperClick.addEventListener('click', (e) => { playerSelection = "PAPER"; });
let randomItem = "";
const getComputerChoice = function () {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    randomItem = choice[randomIndex];
}
const result = document.createElement('p');
gameContent.prepend(result);
const score = document.createElement('h3');
score.innerHTML = `Score:   ${a} - ${b}`;
gameContent.prepend(score);
function singleGame() {
    if(a>=5 || b>=5) return 0;
    getComputerChoice();
    if (playerSelection === "ROCK" && randomItem == "ROCK") result.innerHTML = "It's a draw!";
    if (playerSelection === "PAPER" && randomItem == "PAPER") result.innerHTML = "It's a draw!";
    if (playerSelection === "ROCK" && randomItem === "PAPER") { b++; result.innerHTML = "You Lose! Paper beats Rock"; }
    if (playerSelection === "ROCK" && randomItem === "SCISSORS") { a++; result.innerHTML = "You Win! Rock beats Scissors"; }
    if (playerSelection === "PAPER" && randomItem === "ROCK") { a++; result.innerHTML = "You Win! Paper beats Rock"; }
    if (playerSelection === "PAPER" && randomItem === "SCISSORS") { b++; result.innerHTML = "You Lose! Scissors beat Paper"; }
    if (playerSelection === "SCISSORS" && randomItem === "ROCK") { b++; result.innerHTML = "You Lose! Rock beats Scissors"; }
    if (playerSelection === "SCISSORS" && randomItem === "PAPER") { a++; result.innerHTML = "You Win! Scissors beats Paper"; }
    score.innerHTML = `Score:   ${a} - ${b}`;
    if(a==5 || b==5) {
        result.remove();
        if (a > b) score.innerHTML = "Congratulations, Hero! You've saved the world!";
        if (a < b) score.innerHTML = "You are not worthy! The world is doomed!";
        const playAgain = document.createElement('button');
        playAgain.innerHTML = "<a href='./index.html'>Play Again</a>";
        playAgain.classList.add('play');
        gameContent.prepend(playAgain);
        return;}
    
}
rockClick.addEventListener('click', singleGame);
scissorsClick.addEventListener('click', singleGame);
paperClick.addEventListener('click', singleGame);
