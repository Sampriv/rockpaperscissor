console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const index = (Math.random()*3)
    return choices[Math.floor(index)]
}

function getHumanChoice() {
    return(prompt("Please choose rock, paper or scissors."))
}

console.log(getHumanChoice())

const humanScore = 0;
const computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.lower();
    computerChoice = computerChoice.lower();
    if (humanChoice == "rock" && computerChoice == "paper") {
        return "You lose! Paper beats rock";
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats rock";
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats scissors";
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        return "You lose! Scissors beats paper";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        return "You Win! Scissors beats paper";
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        return "You win! Rock beats scissors";
        computerScore++;
    }
    else {
        return "Same move, play again!"
    }
}