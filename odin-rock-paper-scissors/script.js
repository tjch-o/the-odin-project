let playerScore = 0;
let computerScore = 0;

const roundResult = document.querySelector(".round-result");
const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");
const finalResult = document.querySelector(".end-game");
const restartContainer = document.querySelector(".restart-game");

player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${computerScore}`;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    // the random number generated will be used as the index for choice
    const numberGenerated = Math.floor(Math.random() * 3);
    return choices[numberGenerated];
}

function playRound(playerSelection) {
    roundResult.style.visibility = "visible";
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        roundResult.textContent = "You tie!";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock" ) || 
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else {
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }   
}

function game() {
    // someone has won here
    if (playerScore == 5 || computerScore == 5) {
        // its a first to 5 game so no need to come up with a case for draw
        if (playerScore > computerScore) {
            finalResult.textContent = "Winner winner chicken dinner!";
            finalResult.style.color = "#2832C2";  
        } else if (computerScore > playerScore) {
            finalResult.textContent = "Try harder next time!";
            finalResult.style.color = "red";  
        }

        // make the restart button appear
        restartButton.style.visibility = "visible";
        finalResult.style.visibility = "visible";

        // disable all the other buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function clear() {
    // initialise
    playerScore = 0;
    computerScore = 0;
    roundResult.style.visibility = "hidden";
    // update scoreboard
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    // hide text
    finalResult.style.visibility = "hidden";
    restartButton.style.visibility = "hidden";
    // enable all the other buttons again
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

// i chose to create 3 button clicking instead of using for each 
const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => {
    playRound("Rock");
    // check if game has ended
    game();
} )

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => {
    playRound("Paper");
    game();
} )

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => {
    playRound("Scissors");
    game();
})

const restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", () => {clear();});

// key lesson do use developer tools to debug even if we dont use console.log at all