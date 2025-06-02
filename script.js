let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const div = document.querySelector("div");
function getComputerChoice() {
    let randNum = Math.random();

    if (randNum <= 0.33) {
        let choice = "rock";
        return choice;
    }
    else if (randNum <= 0.66) {
        let choice = "paper";
        return choice;
    }
    else {
        let choice = "scissors";
        return choice;
    }
}

function getHumanChoice() {
    let choice = prompt("Pick rock, paper, or scissors: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            div.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
            computerScore += 1;
        }
        else if (computerChoice == "scissors") {
            div.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
            humanScore += 1
        }
        else {
            div.textContent = "Tie!";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            div.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            div.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
            humanScore += 1
        }
        else {
            div.textContent = "Tie!";
        }
    } else {
        if (computerChoice == "scissors") {
            div.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
            computerScore += 1;
        }
        else if (computerChoice == "rock") {
            div.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
            humanScore += 1
        }
        else {
            div.textContent = "Tie!";
        }
    }
    if (humanScore === 5) {
        div.textContent = "Player Wins! Starting Over!";
        computerScore = 0;
        humanScore = 0;
    } else if (computerScore === 5) {
        div.textContent = "Computer Wins! Starting Over!";
        computerScore = 0;
        humanScore = 0;
    } 

}

rockButton.addEventListener("click", () => {
    let humanSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
paperButton.addEventListener("click", () => {
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
scissorsButton.addEventListener("click", () => {
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
