function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let number = randomNumber(1, 4);
    return number == 1 ? "Rock"
        : number == 2 ? "Paper"
        : "Scissors"
}
