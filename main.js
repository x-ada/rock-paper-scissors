function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors").toUpperCase();

    while (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        alert("Must enter a valid option");
        playerChoice = getPlayerChoice();
    }

    return playerChoice
}

function getComputerChoice() {
    let sign = Math.floor(Math.random() * 3) + 1;

    if (sign == 1) {
        return "ROCK"
    } 
    else if (sign == 2) {
        return "PAPER"
    }
    else if (sign == 3) {
        return "SCISSORS"
    }
}

function getRoundWinner(playerChoice, computerChoice) { 
    if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        return "You lose! PAPER beats ROCK"
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        return "You win! ROCK beats SCISSORS"
    }
    else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        return "You win! PAPER beats ROCK"
    }
    else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        return "You lose! SCISSORS beat PAPER"
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        return "You lose! ROCK beats SCISSORS"
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        return "You win! SCISSORS beat PAPER"
    }
    return "It's a tie!"
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = getRoundWinner(playerChoice, computerChoice);
    return result;
}

function getFinalScore() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound();
        if (roundWinner.includes("win")) {
            playerScore++;
        }
        else if (roundWinner.includes("lose")) {
            computerScore++;
        }
    }

    return `${playerScore}-${computerScore}`
}

function getFinalWinner(score) {
    let score = score.split("-");
    playerScore = score[0];
    computerScore = score[1];

    if (playerScore > computerScore) {
        return "Player Wins!"
    }
    else if (playerScore < computerScore) {
        return "Computer Wins!"
    }
    else {
        return "It's a tie!"
    }
}

function game() {
    let score = getFinalScore();
    alert(score);

    let winner = getFinalWinner(score);
    alert(winner); 
}

game();