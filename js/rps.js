function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice = "";
    if (number == 0) {
        choice = "Rock";
    }
    else if (number == 1) {
        choice = "Paper";
    }
    else if (number == 2) {
        choice = "Scissors";
    }
    return choice;
}

console.log(getComputerChoice());