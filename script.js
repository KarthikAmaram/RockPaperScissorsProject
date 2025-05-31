function getComputerChoice() {
    let randNum = Math.random()
    console.log(randNum)
    if (randNum <= 0.33) {
        let choice = "rock"
        return choice
    }
    else if (randNum <= 0.66) {
        let choice = "paper"
        return choice
    }
    else {
        let choice = "scissors"
        return choice
    }
}

console.log(getComputerChoice());