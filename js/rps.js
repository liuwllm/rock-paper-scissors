function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice = "";
    if (number === 0) {
        choice = "rock";
    }
    else if (number === 1) {
        choice = "paper";
    }
    else if (number === 2) {
        choice = "scissors";
    }
    return choice;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
        else {
            return "You Tie! Rock ties Rock"
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        }
        else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock"
        }
        else {
            return "You Tie! Paper ties Paper"
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        }
        else if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper"
        }
        else {
            return "You Tie! Scissors ties Scissors"
        }
    }
}

function userInput() {
    let playerSelection = prompt("What is your choice?").toLowerCase();
    const validChoices = ["rock", "paper", "scissors"]
    while (!(validChoices.includes(playerSelection))) {
        playerSelection = prompt("What is your choice?").toLowerCase();
    }
    return playerSelection;
}

function main() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = userInput();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

main();