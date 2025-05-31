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

console.log(getHumanChoice());
