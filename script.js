let humanScore = 0;
let computerScore = 0;
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
            console.log("You Lose! " + computerChoice + " beats " + humanChoice)
            computerScore += 1;
        }
        else if (computerChoice == "scissors") {
            console.log("You Win! " + humanChoice + " beats " + computerChoice)
            humanScore += 1
        }
        else {
            console.log("Tie!")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice)
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("You Win! " + humanChoice + " beats " + computerChoice)
            humanScore += 1
        }
        else {
            console.log("Tie!")
        }
    } else {
        if (computerChoice == "scissors") {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice)
            computerScore += 1;
        }
        else if (computerChoice == "rock") {
            console.log("You Win! " + humanChoice + " beats " + computerChoice)
            humanScore += 1
        }
        else {
            console.log("Tie!")
        }
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Player Wins!")
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!")
    } else {
        console.log("Draw!")
    }
}



playGame();
