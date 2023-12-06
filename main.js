let [rock_class, paper_class, scissors_class] = ['rock-btn', 'paper-btn', 'scissors-btn']

let rock_btn = document.getElementsByClassName(rock_class)[0];
let paper_btn = document.getElementsByClassName(paper_class)[0];
let scissors_btn = document.getElementsByClassName(scissors_class)[0];

let buttons = [rock_btn, paper_btn, scissors_btn];
let result = document.getElementsByClassName('result')[0];
let score = document.getElementsByClassName('score')[0];

let player_score = 0, npc_score = 0, draws = 0;
let round_win_requirements = 5;

let player = document.querySelector('.score :nth-child(1)');
let npc = document.querySelector('.score :nth-child(2)');

for (let b of buttons) {
    b.addEventListener('click', function() {
        let choice = (this.className == rock_class) ? 'Rock' : (this.className == paper_class) ? 'Paper' : (this.className == scissors_class) ? 'Scissors' : null;

        let round_result = playRound(choice, getComputerChoice());

        if (round_result) {
            result.textContent = round_result[0];

            if (round_result[1] === 1) {
                player_score += 1;
            } else if (round_result[1] === 2) {
                npc_score += 1;
            }

            if (round_result[1] === 1 || round_result[1] === 2) {
                if (player)
                    player.textContent = "Score (you): " + player_score;
                else
                    player.textContent = "Error Occured!";
                
                if (npc)
                    npc.textContent = "Score (Bot): " + npc_score;
                else
                    npc.textContent = "Error Occured!";
            } else if (round_result[1] === 3) {
                draws += 1;
            }

            if (player_score == round_win_requirements) {
                result.textContent = "Player won the game!";
            } else if (npc_score == round_win_requirements) {
                result.textContent = "Bot won the game, better luck next time.";
            }

            if (player_score == round_win_requirements || npc_score == round_win_requirements) {
                player_score = 0, npc_score = 0, draws = 0;

                player.textContent = "Score (you): ";
                npc.textContent = "Score (Bot): ";
            }
        }
        else {
            console.log("Something has gone wrong!");
        }
    }, false);
}

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

    if (playerSelection == computerSelection) return ["Draw", 3];
    else if (playerSelection == "rock" && computerSelection == "paper") return ["You Lose! Paper beats Rock", 2];
    else if (playerSelection == "rock" && computerSelection == "scissors") return ["You Win! Rock beats Scissors", 1];
    else if (playerSelection == "paper" && computerSelection == "rock") return ["You Win! Paper beats Rock", 1];
    else if (playerSelection == "paper" && computerSelection == "scissors") return ["You Lose! Scissors beats Paper", 2];
    else if (playerSelection == "scissors" && computerSelection == "rock") return ["You Lose! Rock beats Scissors", 1];
    else if (playerSelection == "scissors" && computerSelection == "paper") return ["You Win! Scissors cuts paper", 1];
    else return null;
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
