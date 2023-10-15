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
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) return "Draw";
    else if (playerSelection == "rock" && computerSelection == "paper") return "You Lose! Paper beats Rock";
    else if (playerSelection == "rock" && computerSelection == "scissors") return "You Win! Rock beats Scissors";
    else if (playerSelection == "paper" && computerSelection == "rock") return "You Win! Paper beats Rock";
    else if (playerSelection == "paper" && computerSelection == "scissors") return "You Lose! Scissors beats Paper";
    else if (playerSelection == "scissors" && computerSelection == "rock") return "You Lose! Rock beats Scissors";
    else if (playerSelection == "scissors" && computerSelection == "paper") return "You Win! Scissors cuts paper";
    else return "Something has gone wrong";
}

function game() {
    for (let round = 0; round < 5; round++) {
        let player_choice = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
        let computer_choice = getComputerChoice();
        console.log(player_choice, computer_choice);
        let result = playRound(player_choice, computer_choice);
        console.log(result);
    }
}

game()
