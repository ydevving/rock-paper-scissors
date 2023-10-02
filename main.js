function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let number = randomNumber(1, 4);
    return number == 1 ? "Rock"
        : number == 2 ? "Paper"
        : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) return "Draw";
    else if (playerSelection == "rock" && computerSelection == "Paper") return "You Lose! Paper beats Rock";
    else if (playerSelection == "rock" && computerSelection == "Scissors") return "You Win! Rock beats Scissors";
    else if (playerSelection == "paper" && computerSelection == "Rock") return "You Win! Paper beats Rock";
    else if (playerSelection == "paper" && computerSelection == "Scissors") return "You Lose! Scissors beats Paper";
    else if (playerSelection == "scissors" && computerSelection == "Rock") return "You Lose! Rock beats Scissors";
    else if (playerSelection == "scissors" && computerSelection == "Paper") return "You Win! Scissors cuts paper"
    else return "Something has gone wrong";
}
