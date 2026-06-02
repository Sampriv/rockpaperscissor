let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Please choose rock, paper or scissors.");
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice || !computerChoice) return "Invalid input";
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "Same move, play again!";
    }

    const wins = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (wins[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}`);
}

// Minimal Tests
console.assert(["rock", "paper", "scissors"].includes(getComputerChoice()), "getComputerChoice failed");
console.assert(playRound("rock", "scissors").includes("win"), "playRound win failed");
console.assert(playRound("rock", "paper").includes("lose"), "playRound loss failed");
console.assert(playRound("rock", "rock").includes("Same move"), "playRound tie failed");
console.log("Tests completed.");