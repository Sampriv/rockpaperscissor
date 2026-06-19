const WINNING_SCORE = 5;
const choices = ["rock", "paper", "scissors"];
const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const status = document.querySelector("#status");
const reset = document.querySelector("#reset");
const choiceButtons = document.querySelectorAll("[data-choice]");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! You both chose ${humanChoice}.`;
    }

    if (wins[humanChoice] === computerChoice) {
        humanScore++;
        return `You win the round! ${capitalize(humanChoice)} beats ${computerChoice}.`;
    }

    computerScore++;
    return `You lose the round. ${capitalize(computerChoice)} beats ${humanChoice}.`;
}

function updateScore() {
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function finishGameIfNeeded() {
    if (humanScore < WINNING_SCORE && computerScore < WINNING_SCORE) return;

    status.textContent = humanScore === WINNING_SCORE
        ? "You won the game!"
        : "The computer won the game.";

    choiceButtons.forEach((button) => {
        button.disabled = true;
    });
}

function handleChoice(event) {
    const humanChoice = event.currentTarget.dataset.choice;
    const computerChoice = getComputerChoice();

    result.textContent = playRound(humanChoice, computerChoice);
    updateScore();
    finishGameIfNeeded();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "Choose a move.";
    status.textContent = "";
    updateScore();

    choiceButtons.forEach((button) => {
        button.disabled = false;
    });
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", handleChoice);
});

reset.addEventListener("click", resetGame);
